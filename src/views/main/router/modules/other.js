/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/views/main/Layout'

const componentsRouter = {
  path: '/other',
  component: Layout,
  redirect: '/other/othera',
  name: 'other',
  meta: {
    title: 'other',
    icon: 'other'
  },
  children: [
    {
      path: 'othera',
      component: () => import('@/views/main/Other/othera'),
      name: 'othera',
      meta: { title: 'othera' }
    },
    {
      path: 'otherb',
      component: () => import('@/views/main/Other/otherb'),
      name: 'otherb',
      meta: { title: 'otherb' }
    }
  ]
}

export default componentsRouter
