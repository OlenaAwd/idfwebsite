export  interface IBlogProps{
    id: string | number,
    description?: string,
    title: string,
    text: string,
    title2: string,
    text2:string,
    title3: string,
    text3:string,
    title4: string,
    text4:string,
    title5?: string,
    text5?: string,
    title6?: string,
    text6?:string,
    conclusion:string,
    blog_img?:string,
    blog_category?: string,
    blog_label?: string,

    blog_img2?: string,
    blog_img3?: string

}

export interface IBlog{
    id:string,
    label: string,
    title: string,
    category: string,
    img: string,
  }