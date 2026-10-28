import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'ทำงานอย่างไร', href: getPermalink('/#how') },
    { text: 'รายการที่จับได้', href: getPermalink('/#exceptions') },
    { text: 'สถานะ', href: getPermalink('/#status') },
    { text: 'คำถามที่พบบ่อย', href: getPermalink('/#faq') },
  ],
  actions: [{ text: 'ดูเดโม', href: '/demo/', variant: 'primary' as const }],
};

export const footerData = {
  links: [
    {
      title: 'Closebook',
      links: [
        { text: 'ทำงานอย่างไร', href: getPermalink('/#how') },
        { text: 'รายการที่จับได้', href: getPermalink('/#exceptions') },
        { text: 'ดูเดโม', href: '/demo/' },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [],
  footNote: `
    ต้นแบบสำหรับทดสอบแนวคิด ใช้ข้อมูลสังเคราะห์ ไม่ได้เชื่อมต่อกับมาร์เก็ตเพลส LINE ธนาคาร หรือโปรแกรมบัญชีใด ๆ · สร้างจากเทมเพลต
    <a class="text-primary underline" href="https://github.com/arthelokyo/astrowind">AstroWind</a> (MIT)
  `,
};
