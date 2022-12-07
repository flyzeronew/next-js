function Page(props) {
  const menu=props.menu;
  return <div>{menu}</div>
}

Page.getInitialProps = async ({ req }) => {
const res = await fetch('https://2017tvbsapp-st.tvbs.com.tw/api3/news_program_api/menu?id=28')
const json = await res.json()
return { menu: json.program.title}
}

export default Page