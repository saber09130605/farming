import { defineStore } from 'pinia'

export const useCommonStore = defineStore('common', {
    // 其他配置...
    state: () => {
        return {
          // 所有这些属性都将自动推断出它们的类型
            sacleX: 1,
            sacleY:1
        }
  },
  getters: {
    backTransformX(state): string{
      return `scaleY(${state.sacleX})`
    },
    transform(state): string{
      return `scaleX(${state.sacleX}) scaleY(${state.sacleY})`
    },
    backTransform(state): string{
      return `scaleX(${state.sacleY}) scaleY(${state.sacleX})`
    },
    transformY(state): string{
      return `scaleY(${state.sacleY})`
    },
    transformX(state): string{
      return `scaleX(${state.sacleX})`
    },
   
  }
})