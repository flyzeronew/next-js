

export default function Page(props) {

  console.log(props);
//   const [data, setData] = useState(null)
//   const [isLoading, setLoading] = useState(false)
// console.log(data);
//   useEffect(() => {
//     setLoading(true)
//     fetch('https://tvbsapp.tvbs.com.tw/program_api/wonderful_list?id=28&limit=12&page=0')
//       .then((res) => res.json())
//       .then((data) => {
//         setData(data)
//         setLoading(false)
//       })
//   }, [])


  return <div>

  </div>
}
// export async function getServerSideProps(i) {
//   const res = await fetch('https://2017tvbsapp-st.tvbs.com.tw/api3/news_program_api/menu?id=28')
//   const json = await res.json()
//   return {
//     props:{
//       menu:json.program,
//     }
//   }
// }
// Page.getInitialProps = async ({ req }) => {
// const res = await fetch('https://2017tvbsapp-st.tvbs.com.tw/api3/news_program_api/menu?id=28')
// const json = await res.json()
// return { menu: json.program}
// }

// export async function getServerSideProps(i) {
//   // Fetch data from external API
//   const res_menu = await fetch('https://2017tvbsapp-st.tvbs.com.tw/api3/news_program_api/menu?id=28');
//   const res_portal_menu = await fetch('https://2017tvbsapp-st.tvbs.com.tw/api3/news_program_api/portal_menu');
//   const menu = await res_menu.json();
//   const portal_menu = await res_portal_menu.json();

//   // Pass data to the page via props
//   return { 
//     props:{
//       menu:menu.program,
//       portal_menu:portal_menu
//     }
//    }
// }