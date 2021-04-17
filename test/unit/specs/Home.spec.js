import Vue from 'vue'
import Home from '@/components/Home'
import data from '@/data'

describe('Home.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Home)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('#hello').textContent)
      .toEqual(data.welcome)
  })
})
