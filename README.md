# @sdkwork/backend-sdk

> SDKwork Backend SDK - 专业级TypeScript SDK，服务端API集成方案

## 📦 安装

```bash
npm install @sdkwork/backend-sdk
# 或
yarn add @sdkwork/backend-sdk
# 或
pnpm add @sdkwork/backend-sdk
```

## 🚀 快速开始

### 双Token模式（默认）

Backend SDK默认采用双Token认证模式，创建客户端时传入Token管理器：

```typescript
import { createClient, createTokenManager } from '@sdkwork/backend-sdk';

// 创建Token管理器
const tokenManager = createTokenManager({
  accessToken: 'your-access-token',  // 服务端标识
}, {
  onTokenRefresh: (tokens) => {
    console.log('Token已刷新:', tokens);
  },
});

// 创建客户端时传入tokenManager
const client = createClient({
  baseUrl: 'https://api.sdkwork.com',
  tokenManager,
});

// 登录后设置authToken
const loginResponse = await client.auth.login({
  username: 'admin@example.com',
  password: 'password123',
});
tokenManager.setAuthToken(loginResponse.authToken);

// 请求头:
//   Access-Token: {accessToken}
//   Authorization: Bearer {authToken}
```

### APIKEY模式

```typescript
import { createClient } from '@sdkwork/backend-sdk';

const client = createClient({
  baseUrl: 'https://api.sdkwork.com',
  authMode: 'apikey',
  apiKey: 'your-api-key',
});

// 请求头: Authorization: Bearer {apiKey}
```

### 模式切换

```typescript
// 从双Token切换到APIKEY模式
client.setApiKey('new-api-key');

// 从APIKEY切换到双Token模式
client.setAccessToken('access-token');
client.setAuthToken('auth-token');
```

## 📚 模块列表

| 模块 | 描述 |
|------|------|
| `auth` | 认证 - 登录、注册、登出 |
| `user` | 用户管理 - 用户列表、资料、地址、OAuth |
| `chat` | AI聊天 - 会话、消息、流式输出 |
| `conversation` | 会话管理 |
| `chatMessage` | 消息管理 |
| `generation` | 内容生成 - 图片、视频、音频 |
| `imageGeneration` | 图片生成 |
| `videoGeneration` | 视频生成 |
| `musicGeneration` | 音乐生成 |
| `audioGeneration` | 音频生成 |
| `characterGeneration` | 角色生成 |
| `order` | 订单 - 创建、列表、管理 |
| `payment` | 支付 - 创建、查询、状态 |
| `refund` | 退款 - 申请、列表 |
| `shoppingCart` | 购物车 |
| `model` | AI模型 - 列表、搜索、定价 |
| `file` | 文件管理 - 上传、存储 |
| `disk` | 磁盘管理 |
| `ossBucket` | OSS桶管理 |
| `knowledge` | 知识库 - 向量知识库、语义搜索 |
| `agent` | AI Agent - 管理、对话 |
| `tool` | 工具管理 - 自定义工具注册与执行 |
| `prompt` | 提示词 - 模板管理与渲染 |
| `workspace` | 工作空间 - 团队协作 |
| `project` | 项目管理 |
| `vip` | VIP会员 - 等级、权益 |
| `vipLevel` | VIP等级 |
| `vipUser` | VIP用户 |
| `vipBenefit` | VIP权益 |
| `vipPack` | VIP套餐 |

## 🔐 认证详解

### 双Token认证流程

```
1. 创建客户端 → 设置tokenManager（包含accessToken）
2. 用户登录 → 获取authToken（用户认证token）
3. 设置authToken → 完成认证
4. 请求API → 自动携带双Token
```

### Token说明

| Token | 设置时机 | 用途 | Header |
|-------|---------|------|--------|
| `accessToken` | 创建客户端时 | 服务端标识 | `Access-Token` |
| `authToken` | 登录后 | 用户认证 | `Authorization: Bearer` |
| `refreshToken` | 登录后 | 刷新Token | - |

### TokenManager

```typescript
import { createTokenManager } from '@sdkwork/backend-sdk';

const tokenManager = createTokenManager({
  accessToken: 'your-access-token',
  authToken: 'your-auth-token',
  refreshToken: 'your-refresh-token',
  expiresIn: 7200,
}, {
  onTokenRefresh: (tokens) => console.log('刷新:', tokens),
  onTokenExpired: () => console.log('过期'),
  onTokenCleared: () => console.log('已清除'),
  onTokenSet: (tokens) => console.log('已设置:', tokens),
  onTokenInvalid: () => console.log('无效'),
});

// 管理方法
tokenManager.getAccessToken();
tokenManager.getAuthToken();
tokenManager.getRefreshToken();
tokenManager.setTokens({ authToken: 'new-token' });
tokenManager.setAuthToken('new-auth-token');
tokenManager.clearAuthToken();

// 状态检查
tokenManager.isExpired();
tokenManager.isValid();
tokenManager.hasAuthToken();
tokenManager.willExpireIn(300);
```

## 📖 API参考

### 认证模块

```typescript
// 登录
const loginResponse = await client.auth.login({
  username: 'admin@example.com',
  password: 'password123',
});
client.getTokenManager()?.setAuthToken(loginResponse.authToken);

// 刷新Token
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
// 用户列表
const users = await client.user.listUsers({ page: 1, size: 20 });

// 用户详情
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

// 用户地址
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
await client.chat.sendMessageStream(session.id, { content: '你好' }, (chunk) => {
  console.log('收到:', chunk);
});

// 历史消息
const messages = await client.chat.getMessageHistory(session.id, { page: 1, size: 50 });
```

### 订单模块

```typescript
// 订单列表
const orders = await client.order.listOrders({ status: 'PENDING', page: 1, size: 20 });

// 创建订单
const order = await client.order.createGoodsOrder({
  orderType: 'GOODS',
  productId: 'prod-123',
  quantity: 2,
  addressId: 1,
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

// 查询状态
const status = await client.payment.getPaymentStatus(payment.id);

// 取消支付
await client.payment.cancelPayment(payment.id);
```

### 退款模块

```typescript
// 创建退款
const refund = await client.refund.createRefund({
  orderId: 'order-123',
  refundAmount: 100,
  reason: '商品质量问题',
});

// 退款列表
const refunds = await client.refund.listRefunds({ status: 'PROCESSING' });
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

// 上传文件
const file = await client.knowledge.uploadKnowledgeFile(kb.id, fileObject);

// 添加网页
await client.knowledge.addWebPage(kb.id, {
  url: 'https://example.com/doc',
  title: '产品文档',
});

// 语义搜索
const results = await client.knowledge.search(kb.id, {
  query: '如何开始使用？',
  topK: 5,
});

// 知识库统计
const stats = await client.knowledge.getKnowledgeBaseStats(kb.id);
```

### Agent模块

```typescript
// 创建Agent
const agent = await client.agent.createAgent({
  name: '客服助手',
  description: '处理客户咨询',
  modelId: 'gpt-4',
  instructions: '你是一个热情周到的客服人员...',
  tools: ['search', 'calculator'],
});

// Agent对话
const response = await client.agent.chat(agent.id, {
  message: '我想咨询产品功能',
  conversationId: 'conv-123',
});

// 流式对话
await client.agent.chatStream(agent.id, { message: '你好' }, (chunk) => {
  process.stdout.write(chunk.content);
});
```

### 工具模块

```typescript
// 创建工具
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

### VIP模块

```typescript
// VIP套餐列表
const packs = await client.vipPack.listVipPacks();

// 创建VIP订单
const vipOrder = await client.vip.createVipOrder({
  packId: 'vip-annual',
  paymentProvider: 'ALIPAY',
});

// 充值
const recharge = await client.vipUser.recharge({
  amount: 100,
  paymentProvider: 'WECHAT_PAY',
});

// VIP权益
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
    // Token过期，需要刷新或重新登录
    console.log('Token已过期，请刷新');
    const refreshed = await client.auth.refreshToken({ refreshToken: '...' });
    client.getTokenManager()?.setTokens(refreshed);
  } else if (error instanceof AuthenticationError) {
    // 认证失败
    console.log('认证失败:', error.message);
  } else if (error instanceof ValidationError) {
    // 参数验证错误
    console.log('验证失败:', error.details);
  } else if (error instanceof RateLimitError) {
    // 限流错误
    console.log('请求过于频繁，请稍后重试');
  } else if (error instanceof SdkworkError) {
    // SDK错误
    console.log('SDK错误:', error.code, error.message);
  }
}
```

## ⚙️ 配置选项

```typescript
interface SdkworkConfig {
  baseUrl: string;                    // API基础URL（必填）
  authMode?: 'dual-token' | 'apikey'; // 认证模式
  apiKey?: string;                   // API密钥
  accessToken?: string;              // 访问令牌
  authToken?: string;               // 认证令牌
  tokenManager?: AuthTokenManager;   // Token管理器
  tenantId?: string;                // 租户ID
  organizationId?: string;           // 组织ID
  platform?: string;                // 平台标识
  timeout?: number;                 // 超时时间（默认30000ms）
  headers?: Record<string, string>; // 自定义请求头
}
```

## 🔧 客户端方法

| 方法 | 描述 |
|------|------|
| `getTokenManager()` | 获取Token管理器 |
| `setTokenManager(manager)` | 设置Token管理器 |
| `setAccessToken(token)` | 设置访问令牌 |
| `setAuthToken(token)` | 设置认证令牌 |
| `setTokens(tokens)` | 批量设置Token |
| `getTokens()` | 获取所有Token |
| `clearAuthToken()` | 清除Token（登出） |
| `setApiKey(key)` | 设置API密钥 |
| `setAuthMode(mode)` | 设置认证模式 |
| `isAuthenticated()` | 检查是否已认证 |
| `hasAuthToken()` | 检查是否有authToken |
| `hasAccessToken()` | 检查是否有accessToken |
| `getAuthMode()` | 获取当前认证模式 |

## 🌐 环境支持

- **Node.js**: >= 18.0.0

## 📄 许可证

MIT
