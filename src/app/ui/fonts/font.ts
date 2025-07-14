import localFont from 'next/font/local'

export const Roobert = localFont({
  src: [
    {
      path: './roobert/RoobertTRIAL-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './roobert/RoobertTRIAL-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './roobert/RoobertTRIAL-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './roobert/RoobertTRIAL-SemiBold.otf',
      weight: '600',
      style: 'normal',
    },
    // ... add more styles as needed
  ],
  variable: '--font-roobert', // Optional: for CSS variables
})