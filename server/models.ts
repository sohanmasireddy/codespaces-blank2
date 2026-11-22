export const MODELS = [
  {
    id: 'llama-3.3-70b-versatile',
    label: 'Llama 3.3 70B',
    contextWindow: 131_072,
    maxCompletionTokens: 32_768,
    supportsTemperature: true,
  },
  {
    id: 'llama-3.1-8b-instant',
    label: 'Llama 3.1 8B Instant',
    contextWindow: 131_072,
    maxCompletionTokens: 131_072,
    supportsTemperature: true,
  },
] as const;

export type ModelId = (typeof MODELS)[number]['id'];
export const MODEL_IDS = MODELS.map((model) => model.id) as [ModelId, ...ModelId[]];

export function getModel(modelId: string) {
  return MODELS.find((model) => model.id === modelId);
}
