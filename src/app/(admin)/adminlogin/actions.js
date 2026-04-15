// 'use server'

// import { revalidatePath } from 'next/cache'
// import { redirect } from 'next/navigation'

// import { createClient } from '@/app/utils/supabase/server'

// export async function login(formData) {
//   const supabase = await createClient()

//   // type-casting here for convenience
//   // in practice, you should validate your inputs
//   const data = {
//     email: formData.get('email'),
//     password: formData.get('password'),
//   }

//   const { error } = await supabase.auth.signInWithPassword(data)

//   if (error) {
//     redirect('/error')
//   }

//   revalidatePath('/', 'layout')
//   redirect('/adminboard')
// }

// // export async function signup(formData) {
// //   const supabase = await createClient()

// //   const data = {
// //     email: formData.get('email'),
// //     password: formData.get('password'),
// //   }

// //   const { error } = await supabase.auth.signUp(data)

// //   if (error) {
// //     redirect('/error')
// //   }

// //   revalidatePath('/', 'layout')
// //   redirect('/')
// // }

'use server'

import { revalidatePath } from 'next/cache'
import { createClient } from '@/app/utils/supabase/server'

export async function login(formData) {
  const supabase = await createClient()

  const data = {
    email: formData.get('email'),
    password: formData.get('password'),
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    return { success: false, message: error.message }  // ✅ Return error instead of redirecting
  }

  revalidatePath('/', 'layout')
  return { success: true }  // ✅ Return success response
}
