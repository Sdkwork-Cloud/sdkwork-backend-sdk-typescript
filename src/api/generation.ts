import { BaseApi } from './base';
import type { HttpClient } from '../http/client';
import type { Page } from '../types/core';
import type { QueryListForm } from '../types/common';
import type {
  PlusAiGenerationForm,
  PlusAiGenerationVO,
  GenerateImageForm,
  GenerateImageVO,
  GenerateVideoForm,
  GenerateVideoVO,
  GenerateMusicForm,
  GenerateMusicVO,
  GenerateAudioForm,
  GenerateAudioVO,
  GenerateCharacterForm,
  GenerateCharacterVO,
  GenerateAudioEffectForm,
  GenerateAudioEffectVO,
  GenerateVoiceSpeakerForm,
  GenerateVoiceSpeakerVO,
  GenerationModule,
  ImageGenerationModule,
  VideoGenerationModule,
  MusicGenerationModule,
  AudioGenerationModule,
  CharacterGenerationModule,
  AudioEffectGenerationModule,
  VoiceSpeakerGenerationModule,
} from '../types/generation';

export class GenerationApi extends BaseApi implements GenerationModule {
  constructor(client: HttpClient) {
    super(client, { basePath: '/v3/api/generation' });
  }

  async create(form: PlusAiGenerationForm): Promise<PlusAiGenerationVO> {
    return this.postRequest<PlusAiGenerationVO>('', form);
  }

  async update(form: PlusAiGenerationForm): Promise<PlusAiGenerationVO> {
    return this.putRequest<PlusAiGenerationVO>('', form);
  }

  async delete(id: string | number): Promise<boolean> {
    return this.deleteRequest<boolean>(`/${id}`);
  }

  async getById(id: string | number): Promise<PlusAiGenerationVO> {
    return this.getRequest<PlusAiGenerationVO>(`/${id}`);
  }

  async listAll(form?: QueryListForm): Promise<PlusAiGenerationVO[]> {
    return this.postRequest<PlusAiGenerationVO[]>('/list/all', form);
  }

  async listByPage(form: QueryListForm, page: number = 0, size: number = 20): Promise<Page<PlusAiGenerationVO>> {
    return this.paginate<PlusAiGenerationVO>('/list', page, size, form as unknown as Record<string, string | number | boolean | undefined>);
  }
}

export class ImageGenerationApi extends BaseApi implements ImageGenerationModule {
  constructor(client: HttpClient) {
    super(client, { basePath: '/v3/api/generation/image' });
  }

  async generate(form: GenerateImageForm): Promise<GenerateImageVO> {
    return this.postRequest<GenerateImageVO>('/generate', form);
  }

  async create(form: PlusAiGenerationForm): Promise<PlusAiGenerationVO> {
    return this.postRequest<PlusAiGenerationVO>('', form);
  }

  async update(form: PlusAiGenerationForm): Promise<PlusAiGenerationVO> {
    return this.putRequest<PlusAiGenerationVO>('', form);
  }

  async delete(id: string | number): Promise<boolean> {
    return this.deleteRequest<boolean>(`/${id}`);
  }

  async getById(id: string | number): Promise<PlusAiGenerationVO> {
    return this.getRequest<PlusAiGenerationVO>(`/${id}`);
  }

  async listAll(form?: QueryListForm): Promise<PlusAiGenerationVO[]> {
    return this.postRequest<PlusAiGenerationVO[]>('/list/all', form);
  }

  async listByPage(form: QueryListForm, page: number = 0, size: number = 20): Promise<Page<PlusAiGenerationVO>> {
    return this.paginate<PlusAiGenerationVO>('/list', page, size, form as unknown as Record<string, string | number | boolean | undefined>);
  }
}

export class VideoGenerationApi extends BaseApi implements VideoGenerationModule {
  constructor(client: HttpClient) {
    super(client, { basePath: '/v3/api/generation/video' });
  }

  async generate(form: GenerateVideoForm): Promise<GenerateVideoVO> {
    return this.postRequest<GenerateVideoVO>('/generate', form);
  }

  async create(form: PlusAiGenerationForm): Promise<PlusAiGenerationVO> {
    return this.postRequest<PlusAiGenerationVO>('', form);
  }

  async update(form: PlusAiGenerationForm): Promise<PlusAiGenerationVO> {
    return this.putRequest<PlusAiGenerationVO>('', form);
  }

  async delete(id: string | number): Promise<boolean> {
    return this.deleteRequest<boolean>(`/${id}`);
  }

  async getById(id: string | number): Promise<PlusAiGenerationVO> {
    return this.getRequest<PlusAiGenerationVO>(`/${id}`);
  }

  async listAll(form?: QueryListForm): Promise<PlusAiGenerationVO[]> {
    return this.postRequest<PlusAiGenerationVO[]>('/list/all', form);
  }

  async listByPage(form: QueryListForm, page: number = 0, size: number = 20): Promise<Page<PlusAiGenerationVO>> {
    return this.paginate<PlusAiGenerationVO>('/list', page, size, form as unknown as Record<string, string | number | boolean | undefined>);
  }
}

export class MusicGenerationApi extends BaseApi implements MusicGenerationModule {
  constructor(client: HttpClient) {
    super(client, { basePath: '/v3/api/generation/music' });
  }

  async generate(form: GenerateMusicForm): Promise<GenerateMusicVO> {
    return this.postRequest<GenerateMusicVO>('/generate', form);
  }

  async create(form: PlusAiGenerationForm): Promise<PlusAiGenerationVO> {
    return this.postRequest<PlusAiGenerationVO>('', form);
  }

  async update(form: PlusAiGenerationForm): Promise<PlusAiGenerationVO> {
    return this.putRequest<PlusAiGenerationVO>('', form);
  }

  async delete(id: string | number): Promise<boolean> {
    return this.deleteRequest<boolean>(`/${id}`);
  }

  async getById(id: string | number): Promise<PlusAiGenerationVO> {
    return this.getRequest<PlusAiGenerationVO>(`/${id}`);
  }

  async listAll(form?: QueryListForm): Promise<PlusAiGenerationVO[]> {
    return this.postRequest<PlusAiGenerationVO[]>('/list/all', form);
  }

  async listByPage(form: QueryListForm, page: number = 0, size: number = 20): Promise<Page<PlusAiGenerationVO>> {
    return this.paginate<PlusAiGenerationVO>('/list', page, size, form as unknown as Record<string, string | number | boolean | undefined>);
  }
}

export class AudioGenerationApi extends BaseApi implements AudioGenerationModule {
  constructor(client: HttpClient) {
    super(client, { basePath: '/v3/api/generation/audio' });
  }

  async generate(form: GenerateAudioForm): Promise<GenerateAudioVO> {
    return this.postRequest<GenerateAudioVO>('/generate', form);
  }

  async create(form: PlusAiGenerationForm): Promise<PlusAiGenerationVO> {
    return this.postRequest<PlusAiGenerationVO>('', form);
  }

  async update(form: PlusAiGenerationForm): Promise<PlusAiGenerationVO> {
    return this.putRequest<PlusAiGenerationVO>('', form);
  }

  async delete(id: string | number): Promise<boolean> {
    return this.deleteRequest<boolean>(`/${id}`);
  }

  async getById(id: string | number): Promise<PlusAiGenerationVO> {
    return this.getRequest<PlusAiGenerationVO>(`/${id}`);
  }

  async listAll(form?: QueryListForm): Promise<PlusAiGenerationVO[]> {
    return this.postRequest<PlusAiGenerationVO[]>('/list/all', form);
  }

  async listByPage(form: QueryListForm, page: number = 0, size: number = 20): Promise<Page<PlusAiGenerationVO>> {
    return this.paginate<PlusAiGenerationVO>('/list', page, size, form as unknown as Record<string, string | number | boolean | undefined>);
  }
}

export class CharacterGenerationApi extends BaseApi implements CharacterGenerationModule {
  constructor(client: HttpClient) {
    super(client, { basePath: '/v3/api/generation/character' });
  }

  async generate(form: GenerateCharacterForm): Promise<GenerateCharacterVO> {
    return this.postRequest<GenerateCharacterVO>('/generate', form);
  }

  async create(form: PlusAiGenerationForm): Promise<PlusAiGenerationVO> {
    return this.postRequest<PlusAiGenerationVO>('', form);
  }

  async update(form: PlusAiGenerationForm): Promise<PlusAiGenerationVO> {
    return this.putRequest<PlusAiGenerationVO>('', form);
  }

  async delete(id: string | number): Promise<boolean> {
    return this.deleteRequest<boolean>(`/${id}`);
  }

  async getById(id: string | number): Promise<PlusAiGenerationVO> {
    return this.getRequest<PlusAiGenerationVO>(`/${id}`);
  }

  async listAll(form?: QueryListForm): Promise<PlusAiGenerationVO[]> {
    return this.postRequest<PlusAiGenerationVO[]>('/list/all', form);
  }

  async listByPage(form: QueryListForm, page: number = 0, size: number = 20): Promise<Page<PlusAiGenerationVO>> {
    return this.paginate<PlusAiGenerationVO>('/list', page, size, form as unknown as Record<string, string | number | boolean | undefined>);
  }
}

export class AudioEffectGenerationApi extends BaseApi implements AudioEffectGenerationModule {
  constructor(client: HttpClient) {
    super(client, { basePath: '/v3/api/generation/audio_effect' });
  }

  async generate(form: GenerateAudioEffectForm): Promise<GenerateAudioEffectVO> {
    return this.postRequest<GenerateAudioEffectVO>('/generate', form);
  }

  async create(form: PlusAiGenerationForm): Promise<PlusAiGenerationVO> {
    return this.postRequest<PlusAiGenerationVO>('', form);
  }

  async update(form: PlusAiGenerationForm): Promise<PlusAiGenerationVO> {
    return this.putRequest<PlusAiGenerationVO>('', form);
  }

  async delete(id: string | number): Promise<boolean> {
    return this.deleteRequest<boolean>(`/${id}`);
  }

  async getById(id: string | number): Promise<PlusAiGenerationVO> {
    return this.getRequest<PlusAiGenerationVO>(`/${id}`);
  }

  async listAll(form?: QueryListForm): Promise<PlusAiGenerationVO[]> {
    return this.postRequest<PlusAiGenerationVO[]>('/list/all', form);
  }

  async listByPage(form: QueryListForm, page: number = 0, size: number = 20): Promise<Page<PlusAiGenerationVO>> {
    return this.paginate<PlusAiGenerationVO>('/list', page, size, form as unknown as Record<string, string | number | boolean | undefined>);
  }
}

export class VoiceSpeakerGenerationApi extends BaseApi implements VoiceSpeakerGenerationModule {
  constructor(client: HttpClient) {
    super(client, { basePath: '/v3/api/generation/voice_speaker' });
  }

  async generate(form: GenerateVoiceSpeakerForm): Promise<GenerateVoiceSpeakerVO> {
    return this.postRequest<GenerateVoiceSpeakerVO>('/generate', form);
  }

  async create(form: PlusAiGenerationForm): Promise<PlusAiGenerationVO> {
    return this.postRequest<PlusAiGenerationVO>('', form);
  }

  async update(form: PlusAiGenerationForm): Promise<PlusAiGenerationVO> {
    return this.putRequest<PlusAiGenerationVO>('', form);
  }

  async delete(id: string | number): Promise<boolean> {
    return this.deleteRequest<boolean>(`/${id}`);
  }

  async getById(id: string | number): Promise<PlusAiGenerationVO> {
    return this.getRequest<PlusAiGenerationVO>(`/${id}`);
  }

  async listAll(form?: QueryListForm): Promise<PlusAiGenerationVO[]> {
    return this.postRequest<PlusAiGenerationVO[]>('/list/all', form);
  }

  async listByPage(form: QueryListForm, page: number = 0, size: number = 20): Promise<Page<PlusAiGenerationVO>> {
    return this.paginate<PlusAiGenerationVO>('/list', page, size, form as unknown as Record<string, string | number | boolean | undefined>);
  }
}

export function createGenerationApi(client: HttpClient): GenerationModule {
  return new GenerationApi(client);
}

export function createImageGenerationApi(client: HttpClient): ImageGenerationModule {
  return new ImageGenerationApi(client);
}

export function createVideoGenerationApi(client: HttpClient): VideoGenerationModule {
  return new VideoGenerationApi(client);
}

export function createMusicGenerationApi(client: HttpClient): MusicGenerationModule {
  return new MusicGenerationApi(client);
}

export function createAudioGenerationApi(client: HttpClient): AudioGenerationModule {
  return new AudioGenerationApi(client);
}

export function createCharacterGenerationApi(client: HttpClient): CharacterGenerationModule {
  return new CharacterGenerationApi(client);
}

export function createAudioEffectGenerationApi(client: HttpClient): AudioEffectGenerationModule {
  return new AudioEffectGenerationApi(client);
}

export function createVoiceSpeakerGenerationApi(client: HttpClient): VoiceSpeakerGenerationModule {
  return new VoiceSpeakerGenerationApi(client);
}
