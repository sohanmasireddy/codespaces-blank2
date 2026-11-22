export const MODELS = [
  {
    id: 'openai/gpt-oss-20b',
    label: 'GPT-OSS 20B',
    contextWindow: 131_072,
    maxCompletionTokens: 65_536,
    supportsTemperature: false,
    supportsReasoning: true,
  },
  {
    id: 'openai/gpt-oss-120b',
    label: 'GPT-OSS 120B',
    contextWindow: 131_072,
    maxCompletionTokens: 65_536,
    supportsTemperature: false,
    supportsReasoning: true,
  },
] as const;

export type ModelId = (typeof MODELS)[number]['id'];
export const MODEL_IDS = MODELS.map((model) => model.id) as [ModelId, ...ModelId[]];

export function getModel(modelId: string) {
  return MODELS.find((model) => model.id === modelId);
}
