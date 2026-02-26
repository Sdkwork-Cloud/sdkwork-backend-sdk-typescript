# @sdkwork/backend-sdk

> SDKWork Backend SDK - 专业级 TypeScript SDK，服务端 API 集成方案

## 📦 安装

```bash
npm install @sdkwork/backend-sdk
# 或
yarn add @sdkwork/backend-sdk
# 或
pnpm add @sdkwork/backend-sdk
```

## 🚀 快速开始

### 双 Token 模式（默认）

Backend SDK 默认采用双 Token 认证方式，支持从环境变量自动读取 `accessToken`：

```typescript
import { createClient } from '@sdkwork/backend-sdk';

// 自动从环境变量读取 accessToken
const client = createClient({
  baseUrl: 'https://api.sdkwork.com',
});

// 或手动指定 accessToken
const client = createClient({
  baseUrl: 'https://api.sdkwork.com',
  accessToken: 'your-access-token',
});

// 登录后设置 authToken
const loginResponse = await client.auth.login({
  username: 'admin@example.com',
  password: 'password123',
});
client.setAuthToken(loginResponse.authToken);

// 请求头:
//   Access-Token: {accessToken}
//   Authorization: Bearer {authToken}
```

### API Key 模式

如需使用 API Key 模式：

```typescript
import { createClient } from '@sdkwork/backend-sdk';

const client = createClient({
  baseUrl: 'https://api.sdkwork.com',
  apiKey: 'your-api-key',
});

// 请求头: Authorization: Bearer {apiKey}
```

## 📚 模块列表

| 模块 | 描述 |
|------|------|
| `auth` | 认证管理 - 登录、注册、Token 刷新 |
| `user` | 用户管理 - 用户列表、资料、地址、OAuth 账号 |
| `chat` | AI 聊天 - 会话、消息，流式输出 |
| `generation` | 内容生成 - 图片、视频、音频、角色 |
| `trade` | 交易订单 - 订单、支付、退款、购物车 |
| `model` | AI 模型 - 模型管理、定价 |
| `file` | 文件管理 - 上传、存储、OSS 桶 |
| `knowledge` | 知识库 - 向量知识库、语义搜索 |
| `agent` | AI Agent - Agent 管理、对话 |
| `tool` | 工具管理 - 自定义工具注册与执行 |
| `prompt` | 提示词 - 模板管理与渲染 |
| `workspace` | 工作空间 - 团队协作、项目管理 |
| `vip` | VIP 会员 - 等级、权益、套餐 |

## 📖 API 参考

### 认证模块

```typescript
// 登录
const loginResponse = await client.auth.login({
  username: 'admin@example.com',
  password: 'password123',
});
client.setAuthToken(loginResponse.authToken);

// 刷新 Token
const refreshed = await client.auth.refreshToken({
  refreshToken: loginResponse.refreshToken,
});

// 注册
const userInfo = await client.auth.register({
  username: 'newuser',
  password: 'password123',
  email: 'user@example.com',
});

// 登出
client.clearAuthToken();

// 检查认证状态
if (client.isAuthenticated()) {
  console.log('已登录');
}
```

### 用户模块

```typescript
// 获取用户列表
const users = await client.user.listUsers({ page: 1, size: 20 });

// 获取用户详情
const user = await client.user.getUser(123);

// 创建用户
const newUser = await client.user.createUser({
  username: 'newuser',
  password: 'password123',
  email: 'user@example.com',
});

// 更新用户
const updated = await client.user.updateUser(123, {
  nickname: '新昵称',
  status: 'ACTIVE',
});

// 删除用户
await client.user.deleteUser(123);

// 用户地址管理
const addresses = await client.userAddress.listUserAddresses(123);
const address = await client.userAddress.createUserAddress(123, {
  receiver: '张三',
  phone: '13800138000',
  province: '广东省',
  city: '深圳市',
  district: '南山区',
  detail: '科技园路1号',
});
```

### 聊天模块

```typescript
// 创建会话
const session = await client.chat.createConversation({
  modelId: 'gpt-4',
  systemPrompt: '你是一个专业的AI助手。',
});

// 发送消息
const message = await client.chat.sendMessage(session.id, {
  content: '请介绍一下你自己。',
});

// 流式消息
await client.chat.sendMessageStream(session.id, { content: '你好' }, {
  onChunk: (chunk) => console.log('收到:', chunk),
  onComplete: () => console.log('完成'),
  onError: (error) => console.error('错误:', error),
});

// 获取历史消息
const messages = await client.chat.getMessageHistory(session.id, {
  page: 1,
  size: 50,
});
```

### 知识库模块

```typescript
// 创建知识库
const kb = await client.knowledge.createKnowledgeBase({
  name: '产品文档',
  description: '产品使用文档',
  embeddingModel: 'text-embedding-3-small',
  chunkSize: 500,
});

// 上传知识库文件
const file = await client.knowledge.uploadKnowledgeFile(kb.id, fileObject);

// 添加网页内容
await client.knowledge.addWebPage(kb.id, {
  url: 'https://example.com/doc',
  title: '产品文档',
});

// 语义搜索
const results = await client.knowledge.search(kb.id, {
  query: '如何开始使用？',
  topK: 5,
});

// 获取知识库统计
const stats = await client.knowledge.getKnowledgeBaseStats(kb.id);
```

### Agent 模块

```typescript
// 创建 Agent
const agent = await client.agent.createAgent({
  name: '客服助手',
  description: '处理客户咨询',
  modelId: 'gpt-4',
  instructions: '你是一个热情周到的客服人员...',
  tools: ['search', 'calculator'],
});

// 与 Agent 对话
const response = await client.agent.chat(agent.id, {
  message: '我想咨询产品功能',
  conversationId: 'conv-123',
});

// 流式对话
await client.agent.chatStream(agent.id, { message: '你好' }, {
  onChunk: (chunk) => process.stdout.write(chunk.content),
});
```

### 工具模块

```typescript
// 注册自定义工具
const tool = await client.tool.createTool({
  name: '天气查询',
  description: '查询指定城市的天气信息',
  type: 'FUNCTION',
  schema: {
    type: 'object',
    properties: {
      city: { type: 'string', description: '城市名称' },
    },
    required: ['city'],
  },
});

// 执行工具
const result = await client.tool.execute(tool.id, { city: '深圳' });

// 工具列表
const tools = await client.tool.listTools({ type: 'FUNCTION' });
```

### 提示词模块

```typescript
// 创建提示词模板
const prompt = await client.prompt.createPrompt({
  name: '翻译助手',
  content: '请将以下{{source_lang}}翻译成{{target_lang}}:\n{{content}}',
  variables: ['source_lang', 'target_lang', 'content'],
});

// 渲染提示词
const rendered = await client.prompt.render(prompt.id, {
  source_lang: '中文',
  target_lang: '英文',
  content: '今天天气真好',
});

// 更新提示词
await client.prompt.updatePrompt(prompt.id, {
  content: '新模板内容...',
});
```

### 订单模块

```typescript
// 创建商品订单
const order = await client.order.createGoodsOrder({
  orderType: 'GOODS',
  productId: 'prod-123',
  quantity: 2,
  addressId: 1,
});

// 订单列表
const orders = await client.order.listOrders({
  status: 'PENDING',
  page: 1,
  size: 20,
});

// 确认订单
await client.order.confirm(order.id);

// 取消订单
await client.order.cancel(order.id, { reason: '不想要了' });

// 关闭订单
await client.order.close(order.id);

// 物流信息
const shipInfo = await client.order.getShipInfo(order.id);
```

### 支付模块

```typescript
// 创建支付
const payment = await client.payment.createPayment({
  orderId: 'order-123',
  paymentProvider: 'WECHAT_PAY',
  productType: 'JSAPI',
});

// 查询支付状态
const status = await client.payment.getPaymentStatus(payment.id);

// 取消支付
await client.payment.cancelPayment(payment.id);

// 退款申请
const refund = await client.refund.createRefund({
  orderId: 'order-123',
  refundAmount: 100,
  reason: '商品质量问题',
});

// 退款列表
const refunds = await client.refund.listRefunds({ status: 'PROCESSING' });
```

### VIP 模块

```typescript
// VIP 套餐列表
const packs = await client.vipPack.listVipPacks();

// 创建 VIP 订单
const vipOrder = await client.vip.createVipOrder({
  packId: 'vip-annual',
  paymentProvider: 'ALIPAY',
});

// 充值
const recharge = await client.vipUser.recharge({
  amount: 100,
  paymentProvider: 'WECHAT_PAY',
});

// VIP 权益列表
const benefits = await client.vipBenefit.listBenefits();
```

## ⚠️ 错误处理

```typescript
import {
  SdkworkError,
  AuthenticationError,
  NetworkError,
  TokenExpiredError,
  ValidationError,
  RateLimitError,
} from '@sdkwork/backend-sdk';

try {
  await client.user.getUser(123);
} catch (error) {
  if (error instanceof TokenExpiredError) {
    // Token 过期，需要刷新或重新登录
    console.log('Token 已过期，请刷新');
    const refreshed = await client.auth.refreshToken({ refreshToken: '...' });
    client.setAuthToken(refreshed.authToken);
  } else if (error instanceof AuthenticationError) {
    // 认证失败
    console.log('认证失败:', error.message);
  } else if (error instanceof ValidationError) {
    // 参数验证错误
    console.log('验证失败:', error.details);
  } else if (error instanceof RateLimitError) {
    // 限流错误
    console.log('请求过于频繁，请稍后重试');
    console.log('重试时间:', error.retryAfter);
  } else if (error instanceof SdkworkError) {
    // SDK 错误
    console.log('SDK错误:', error.code, error.message);
  }
}
```

## ⚙️ 配置选项

```typescript
interface SdkworkConfig {
  baseUrl: string;                    // API 基础 URL（必填）
  accessToken?: string;              // 访问令牌
  authToken?: string;                // 认证令牌
  apiKey?: string;                   // API 密钥（API Key 模式）
  tenantId?: string;                 // 租户 ID
  organizationId?: string;            // 组织 ID
  platform?: string;                 // 平台标识
  tokenManager?: AuthTokenManager;    // Token 管理器
  timeout?: number;                  // 超时时间（默认 30000ms）
  authMode?: AuthMode;               // 认证模式
  headers?: Record<string, string>; // 自定义请求头
  retry?: Partial<RetryConfig>;      // 重试配置
  cache?: Partial<CacheConfig>;      // 缓存配置
  logger?: Partial<LoggerConfig>;    // 日志配置
}
```

## 🔧 客户端方法

| 方法 | 描述 |
|------|------|
| `setAccessToken(token)` | 设置访问令牌 |
| `setAuthToken(token)` | 设置认证令牌 |
| `setApiKey(key)` | 设置 API 密钥（切换到 API Key 模式） |
| `setTokens(accessToken, authToken)` | 批量设置 Token |
| `clearAuthToken()` | 清除 Token（登出） |
| `isAuthenticated()` | 检查是否已认证 |
| `hasAccessToken()` | 检查是否有访问令牌 |
| `hasAuthToken()` | 检查是否有认证令牌 |
| `getAuthMode()` | 获取当前认证模式 |
| `setTimeout(ms)` | 设置超时时间 |

## 🔐 Token 说明

| Token | 用途 | Header |
|-------|------|--------|
| `accessToken` | 设备/服务端标识 | `Access-Token` |
| `authToken` | 用户认证 | `Authorization: Bearer` |

## 🌐 环境支持

- **Node.js**: >= 18.0.0

## 📄 许可证

MIT
