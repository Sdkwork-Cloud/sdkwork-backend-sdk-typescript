import type { BasePlusVO, Page, QueryListForm } from './common';

export type GenerationType = 'image' | 'video' | 'music' | 'audio' | 'character' | 'audio_effect' | 'voice_speaker';

export interface PlusAiGenerationForm {
  id?: string | number;
  userId?: string | number;
  requestId?: string;
  model?: string;
  channel?: string;
  type?: GenerationType;
  cost?: number;
  status?: string;
  requestTime?: string;
  responseTime?: string;
}

export interface PlusAiGenerationVO extends BasePlusVO {
  userId: string | number;
  requestId: string;
  model: string;
  channel: string;
  type: GenerationType;
  cost: number;
  status: string;
  startedAt?: string;
  completedAt?: string;
}

export interface PlusAiGenerationContentForm {
  id?: string | number;
  generationId?: string | number;
  type?: string;
  content?: string;
  url?: string;
  metadata?: Record<string, unknown>;
}

export interface PlusAiGenerationContentVO extends BasePlusVO {
  generationId: string | number;
  type: string;
  content: string;
  url: string;
  metadata?: Record<string, unknown>;
}

export interface GenerateImageForm {
  prompt: string;
  negativePrompt?: string;
  model?: string;
  width?: number;
  height?: number;
  numImages?: number;
  style?: string;
  quality?: string;
  seed?: number;
  steps?: number;
  cfgScale?: number;
  sampler?: string;
}

export interface GenerateImageVO extends BasePlusVO {
  requestId: string;
  status: string;
  images: Array<{
    url: string;
    width: number;
    height: number;
    seed?: number;
  }>;
  metadata?: Record<string, unknown>;
}

export interface GenerateVideoForm {
  prompt: string;
  negativePrompt?: string;
  model?: string;
  duration?: number;
  width?: number;
  height?: number;
  fps?: number;
  style?: string;
  seed?: number;
}

export interface GenerateVideoVO extends BasePlusVO {
  requestId: string;
  status: string;
  videos: Array<{
    url: string;
    duration: number;
    width: number;
    height: number;
    fps: number;
  }>;
  metadata?: Record<string, unknown>;
}

export interface GenerateMusicForm {
  prompt: string;
  model?: string;
  duration?: number;
  genre?: string;
  tempo?: string;
  key?: string;
  mode?: string;
  instrument?: string;
  seed?: number;
}

export interface GenerateMusicVO extends BasePlusVO {
  requestId: string;
  status: string;
  audios: Array<{
    url: string;
    duration: number;
    format: string;
  }>;
  metadata?: Record<string, unknown>;
}

export interface GenerateAudioForm {
  prompt: string;
  model?: string;
  voice?: string;
  speed?: number;
  pitch?: number;
  format?: string;
}

export interface GenerateAudioVO extends BasePlusVO {
  requestId: string;
  status: string;
  audios: Array<{
    url: string;
    duration: number;
    format: string;
  }>;
  metadata?: Record<string, unknown>;
}

export interface GenerateCharacterForm {
  prompt: string;
  model?: string;
  style?: string;
  gender?: string;
  age?: string;
  features?: string[];
}

export interface GenerateCharacterVO extends BasePlusVO {
  requestId: string;
  status: string;
  characters: Array<{
    url: string;
    width: number;
    height: number;
    metadata?: Record<string, unknown>;
  }>;
  metadata?: Record<string, unknown>;
}

export interface GenerateAudioEffectForm {
  prompt: string;
  model?: string;
  duration?: number;
  type?: string;
}

export interface GenerateAudioEffectVO extends BasePlusVO {
  requestId: string;
  status: string;
  audios: Array<{
    url: string;
    duration: number;
    format: string;
  }>;
  metadata?: Record<string, unknown>;
}

export interface GenerateVoiceSpeakerForm {
  text: string;
  model?: string;
  speakerId?: string;
  speed?: number;
  pitch?: number;
  emotion?: string;
}

export interface GenerateVoiceSpeakerVO extends BasePlusVO {
  requestId: string;
  status: string;
  audio: {
    url: string;
    duration: number;
    format: string;
  };
  metadata?: Record<string, unknown>;
}

export interface GenerationModule {
  create(form: PlusAiGenerationForm): Promise<PlusAiGenerationVO>;
  update(form: PlusAiGenerationForm): Promise<PlusAiGenerationVO>;
  delete(id: string | number): Promise<boolean>;
  getById(id: string | number): Promise<PlusAiGenerationVO>;
  listAll(form?: QueryListForm): Promise<PlusAiGenerationVO[]>;
  listByPage(form: QueryListForm, page?: number, size?: number): Promise<Page<PlusAiGenerationVO>>;
}

export interface ImageGenerationModule {
  generate(form: GenerateImageForm): Promise<GenerateImageVO>;
  create(form: PlusAiGenerationForm): Promise<PlusAiGenerationVO>;
  update(form: PlusAiGenerationForm): Promise<PlusAiGenerationVO>;
  delete(id: string | number): Promise<boolean>;
  getById(id: string | number): Promise<PlusAiGenerationVO>;
  listAll(form?: QueryListForm): Promise<PlusAiGenerationVO[]>;
  listByPage(form: QueryListForm, page?: number, size?: number): Promise<Page<PlusAiGenerationVO>>;
}

export interface VideoGenerationModule {
  generate(form: GenerateVideoForm): Promise<GenerateVideoVO>;
  create(form: PlusAiGenerationForm): Promise<PlusAiGenerationVO>;
  update(form: PlusAiGenerationForm): Promise<PlusAiGenerationVO>;
  delete(id: string | number): Promise<boolean>;
  getById(id: string | number): Promise<PlusAiGenerationVO>;
  listAll(form?: QueryListForm): Promise<PlusAiGenerationVO[]>;
  listByPage(form: QueryListForm, page?: number, size?: number): Promise<Page<PlusAiGenerationVO>>;
}

export interface MusicGenerationModule {
  generate(form: GenerateMusicForm): Promise<GenerateMusicVO>;
  create(form: PlusAiGenerationForm): Promise<PlusAiGenerationVO>;
  update(form: PlusAiGenerationForm): Promise<PlusAiGenerationVO>;
  delete(id: string | number): Promise<boolean>;
  getById(id: string | number): Promise<PlusAiGenerationVO>;
  listAll(form?: QueryListForm): Promise<PlusAiGenerationVO[]>;
  listByPage(form: QueryListForm, page?: number, size?: number): Promise<Page<PlusAiGenerationVO>>;
}

export interface AudioGenerationModule {
  generate(form: GenerateAudioForm): Promise<GenerateAudioVO>;
  create(form: PlusAiGenerationForm): Promise<PlusAiGenerationVO>;
  update(form: PlusAiGenerationForm): Promise<PlusAiGenerationVO>;
  delete(id: string | number): Promise<boolean>;
  getById(id: string | number): Promise<PlusAiGenerationVO>;
  listAll(form?: QueryListForm): Promise<PlusAiGenerationVO[]>;
  listByPage(form: QueryListForm, page?: number, size?: number): Promise<Page<PlusAiGenerationVO>>;
}

export interface CharacterGenerationModule {
  generate(form: GenerateCharacterForm): Promise<GenerateCharacterVO>;
  create(form: PlusAiGenerationForm): Promise<PlusAiGenerationVO>;
  update(form: PlusAiGenerationForm): Promise<PlusAiGenerationVO>;
  delete(id: string | number): Promise<boolean>;
  getById(id: string | number): Promise<PlusAiGenerationVO>;
  listAll(form?: QueryListForm): Promise<PlusAiGenerationVO[]>;
  listByPage(form: QueryListForm, page?: number, size?: number): Promise<Page<PlusAiGenerationVO>>;
}

export interface AudioEffectGenerationModule {
  generate(form: GenerateAudioEffectForm): Promise<GenerateAudioEffectVO>;
  create(form: PlusAiGenerationForm): Promise<PlusAiGenerationVO>;
  update(form: PlusAiGenerationForm): Promise<PlusAiGenerationVO>;
  delete(id: string | number): Promise<boolean>;
  getById(id: string | number): Promise<PlusAiGenerationVO>;
  listAll(form?: QueryListForm): Promise<PlusAiGenerationVO[]>;
  listByPage(form: QueryListForm, page?: number, size?: number): Promise<Page<PlusAiGenerationVO>>;
}

export interface VoiceSpeakerGenerationModule {
  generate(form: GenerateVoiceSpeakerForm): Promise<GenerateVoiceSpeakerVO>;
  create(form: PlusAiGenerationForm): Promise<PlusAiGenerationVO>;
  update(form: PlusAiGenerationForm): Promise<PlusAiGenerationVO>;
  delete(id: string | number): Promise<boolean>;
  getById(id: string | number): Promise<PlusAiGenerationVO>;
  listAll(form?: QueryListForm): Promise<PlusAiGenerationVO[]>;
  listByPage(form: QueryListForm, page?: number, size?: number): Promise<Page<PlusAiGenerationVO>>;
}
