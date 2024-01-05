import Script from 'next/script'
 
function GoogleAnalytics() {
  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-T2JVSYL303" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag() { dataLayer.push(arguments); }
          gtag('js', new Date());
        
          gtag('config', 'G-T2JVSYL303');
        `}
      </Script>
    </>
  )
}
 
export default GoogleAnalytics