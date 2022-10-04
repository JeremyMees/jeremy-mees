import { defineStore } from 'pinia'

export const useContentStore = defineStore('content', {
  state: () => {
    return {
      themes: ['Default', 'Test'],
      name: 'Jeremy Mees',
      job: 'Frontend developer',
      email: 'jeremymees123@gmail.com',
      number: '0472112720',
      linkedinLink: 'https://www.linkedin.com/in/jeremy-mees-65324220b/',
      appeelLink: 'https:/appeel.io',
      aboutMe:
        'Hallo ik ben Jeremy en ik ben een web developer uit Hasselt.|Ik werk momenteel in hoofdberoep voor Appeel.io.|Als ik niet aan het developen ben kan je mij terug vinden in mijn grote verzameling van huisplanten en toetsenborden.',
      list: [
        {
          title: 'Ontwerp',
          text: 'Het ontwerp van de website is het eerste wat je klant ziet en is dus heel belangrijk voor de eerste indruk',
        },
        {
          title: 'Gevoel',
          text: 'Het gevoel en de gebruiksvriendelijkheid van een website zorgt ervoor dat de klanten blijven.',
        },
        { title: 'Resultaat', text: 'hier moet nog een tekstje komen' },
      ],
      ctaTitle: 'Ben je klaar om jouw bedrijf een boost te geven?',
      ctaText:
        'Een website die goed ontworpen en ontwikkeld is met zorg kan wonderen doen voor uw bedrijf. Contacteer mij zodat wij samen kunnen bekijken wat we voor elkaar kunnen betekenen.',
    }
  },
})
