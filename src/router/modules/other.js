/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/views/Layout'

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
      component: () => import('@/views/Other/othera'),
      name: 'othera',
      meta: { title: 'othera' }
    },
    {
      path: 'otherb',
      component: () => import('@/views/Other/otherb'),
      name: 'otherb',
      meta: { title: 'otherb' }
    }
  ]
}

export default componentsRouter
