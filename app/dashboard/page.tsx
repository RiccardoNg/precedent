import Head from 'next/head';
// import styles from './demo.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons';

import * as pbi from 'powerbi-client';

export default function Demo() {
	return (
		<div>
			<div className="w-full max-w-xl px-5 xl:px-0">
                <div className="relative float flex-col bg-clip-border rounded-xl bg-white text-gray-700 h-[calc(100vh-2rem)] w-full p-4 shadow-xl shadow-blue-gray-900/5">
                    <div>
                        <iframe
                            title='powerbi_example'
                            width='1200'
                            height='450'
                            src='https://app.powerbi.com/view?r=eyJrIjoiZGYxNjYzNmUtOTlmZS00ODAxLWE1YTEtMjA0NjZhMzlmN2JmIiwidCI6IjljOWEzMGRlLWQ4ZDctNGFhNC05NjAwLTRiZTc2MjVmZjZjNSIsImMiOjh9'
                            frameBorder={0}
                            allowFullScreen={true}></iframe>
                    </div>
                </div>
            </div>
				
				
			
				
			
		</div>
	);
}



   
// "use client";       
// import React, { useEffect, useState } from 'react';
// import { PowerBIEmbed } from 'powerbi-client-react';
// import { models } from 'powerbi-client';

// function PowerBIReport (){
//   const [isClientSide, setIsClientSide] = useState(false);
//   const reportId = "3c0d96c2-49fe-4b64-a991-4ee912ecd1c0";
//   useEffect(() => {
//     // Since window is undefined in SSR, this will only set to true in client-side
//     if (typeof window !== 'undefined') {
//       setIsClientSide(true);
//     }
//   }, []);

//   const embedConfig = {
//     type: "report",
//     id: reportId,
//     embedUrl: `https://app.powerbi.com/reportEmbed?reportId=${reportId}`,
//     tokenType: models.TokenType.Embed,
//     // accessToken: process.env.EMBED_ACCESS_TOKEN, // Replace with your actual token
//     accessToken: "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IlQxU3QtZExUdnlXUmd4Ql82NzZ1OGtyWFMtSSIsImtpZCI6IlQxU3QtZExUdnlXUmd4Ql82NzZ1OGtyWFMtSSJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvOGVlNGFhNDEtMzk3MC00ZjQ3LThmZDgtYzcxZjM5NDYwYjUyLyIsImlhdCI6MTcwMzA2MTgyNywibmJmIjoxNzAzMDYxODI3LCJleHAiOjE3MDMwNjY1NjgsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VkFBQUFqQUZsY1pkZTFuQ3BueWN2cmZsQ21xZGNvV0hhMGxpZ0tmSDdHUm5IMkIzVWF2UHhiQmdoQzBXTjNHL0pwMjdwIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6ImU5ZTJiNDU1LTM2OTAtNDMxYi04YzUwLWJkYzFkNDcyOGJjMCIsImFwcGlkYWNyIjoiMSIsImZhbWlseV9uYW1lIjoiUGFydG5lciIsImdpdmVuX25hbWUiOiJEZXYiLCJpcGFkZHIiOiI1NC44Ni41MC4xMzkiLCJuYW1lIjoiRGV2IFBhcnRuZXIiLCJvaWQiOiJlYjJhYmZiZi0xZTM3LTRkNzAtYjhkNS0wYjliMWNkNTA4NTciLCJwdWlkIjoiMTAwMzIwMDIwN0QxNjk0NyIsInJoIjoiMC5BWEFBUWFya2puQTVSMC1QMk1jZk9VWUxVZ2tBQUFBQUFBQUF3QUFBQUFBQUFBQndBRUkuIiwic2NwIjoiQXBwLlJlYWQuQWxsIENhcGFjaXR5LlJlYWQuQWxsIENhcGFjaXR5LlJlYWRXcml0ZS5BbGwgQ29udGVudC5DcmVhdGUgRGFzaGJvYXJkLlJlYWQuQWxsIERhc2hib2FyZC5SZWFkV3JpdGUuQWxsIERhdGFmbG93LlJlYWQuQWxsIERhdGFmbG93LlJlYWRXcml0ZS5BbGwgRGF0YXNldC5SZWFkLkFsbCBEYXRhc2V0LlJlYWRXcml0ZS5BbGwgR2F0ZXdheS5SZWFkLkFsbCBHYXRld2F5LlJlYWRXcml0ZS5BbGwgUmVwb3J0LlJlYWQuQWxsIFJlcG9ydC5SZWFkV3JpdGUuQWxsIFN0b3JhZ2VBY2NvdW50LlJlYWQuQWxsIFN0b3JhZ2VBY2NvdW50LlJlYWRXcml0ZS5BbGwgV29ya3NwYWNlLlJlYWQuQWxsIFdvcmtzcGFjZS5SZWFkV3JpdGUuQWxsIiwic3ViIjoicHJzYTVPc0J6WjlldVM2NjEyc0hramZxMy1FcGlVbzRQYm8zdVNYSmJsMCIsInRpZCI6IjhlZTRhYTQxLTM5NzAtNGY0Ny04ZmQ4LWM3MWYzOTQ2MGI1MiIsInVuaXF1ZV9uYW1lIjoiZGV2LnBhcnRuZXJAbWJhZ2Vhcy5saWZlIiwidXBuIjoiZGV2LnBhcnRuZXJAbWJhZ2Vhcy5saWZlIiwidXRpIjoicUZwVjhuOFczRUtERk9QMVJTTTFBQSIsInZlciI6IjEuMCIsIndpZHMiOlsiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il19.QhF2r10JxN9DNVl9sTwJ-9TNYIavnJN86Y59eiCE1qNdF5j3fhtiV0RR6hjOoSgqcnF1Zke_lnuC2Peblj9yq9RqTCpWJzcT5-__lP9NuIPZZgAtK7Q16J1rD25x-w17_CdnzigoLZc5FYUKqF-HrzxbOG4QKEM2LlNinZD36qju9jSrWJlqY6QFBzkRfLVKfLqIF3XXC1KsAC4iHmcUPJJVoZBfqEGizXbNgtyYaTsR2s5fcLmobr7cKhgtYkfw8emQis-u3uP6apvkq_V2OSj4acCHNI1QmsPWy1fIkEl59xqQHCQ-8EDfAyh1asy_lJJ1NjU0Yb7k9WCR5qylmw", 
//     settings: {
//       filterPaneEnabled: false,
//       navContentPaneEnabled: false,
//     },
//   };

// //   // Fetch sample report's config (eg. embedUrl and AccessToken) for embedding
// //   const mockSignIn = async () => {
// //     // Fetch sample report's embed config
// //     const reportConfigResponse = await fetch(sampleReportUrl);

// //     if (!reportConfigResponse.ok) {
// //       console.error(
// //         `Failed to fetch config for report. Status: ${reportConfigResponse.status} ${reportConfigResponse.statusText}`
// //       );
// //       return;
// //     }

// //     const reportConfig = await reportConfigResponse.json();

// //     // Update display message
// //     setMessage(
// //       "The access token is successfully set. Loading the Power BI report"
// //     );

// //     // Set the fetched embedUrl and embedToken in the report config
// //     setReportConfig({
// //       ...sampleReportConfig,
// //       embedUrl: reportConfig.EmbedUrl,
// //       accessToken: reportConfig.EmbedToken.Token
// //     });
// //   };

//   return (
//     <div>
//         <div className="w-full max-w-xl px-5 xl:px-0">
//             <div className="relative float flex-col bg-clip-border rounded-xl bg-white text-gray-700 h-[calc(100vh-2rem)] w-full p-4 shadow-xl shadow-blue-gray-900/5">
//                 <h1>Power BI Report</h1>
//                 {isClientSide && (
//                     <div style={{ height: '600px', width: '100%' }}>
//                     <PowerBIEmbed
//                         embedConfig={embedConfig}
//                         eventHandlers={
//                         new Map([
//                             ['loaded', function () { console.log('Report loaded'); }],
//                             ['rendered', function () { console.log('Report rendered'); }],
//                             ['error', function (event) { console.error(event?.detail); }]
//                         ])
//                         }
//                         cssClassName={"powerbi-container"}
//                     />
//                     </div>
//                 )}
//             </div>
//         </div>
      
//     </div>
//   );
// };

// export default PowerBIReport;

