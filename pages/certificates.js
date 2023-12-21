import Link from 'next/link';
import React from 'react'


const Certificates = () => {
  return (
    <>
      <section class=" body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 ">CERTIFICATES / CERTIFICATES</h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Download certificates</p>
          </div>
          <div class="lg:w-3/4 w-full mx-auto overflow-auto">
            <table class="table-auto w-full text-left whitespace-no-wrap">
              <thead>
                <tr>
                  <th class="px-4 py-3 title-font tracking-wider font-medium text-sm bg-gray-900 rounded-tl rounded-bl">Certificate / certificate</th>
                  <th class="px-4 py-3 title-font tracking-wider font-medium text-sm bg-gray-900">Description / Location / Cert No.</th>
                  <th class="px-4 py-3 title-font tracking-wider font-medium text-sm bg-gray-900">Language</th>
                  <th class="px-4 py-3 title-font tracking-wider font-medium text-sm bg-gray-900">Download</th>
                  <th class="w-10 title-font tracking-wider font-medium text-sm bg-gray-900 rounded-tr rounded-br">Download</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="px-4 py-3">ISO 9001:2015</td>
                  <td class="px-4 py-3">Germany 066984 QM15</td>
                  <td class="px-4 py-3">German / English</td>
                  <td class="px-4 py-3 text-lg "><Link href="/QM_9001_de.pdf" download="QM/German" aria-label="QM/German">
                    Quality management certificate ISO 9001: 2015 Germany / Language: German</Link></td>
                  <td class="px-4 py-3 text-lg ">
                    <Link href="/QM_9001_en.pdf" download="QM/English" aria-label="QM/English">
                  Quality Certification ISO 9001: 2015 Germany / Language: English</Link></td>
                </tr>
                <tr>
                  <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">ISO 14001:2015</td>
                  <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">Environmental management system ISO 14001: 2015 Location: Germany 066984 UM15</td>
                  <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">German / English</td>
                  <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg ">
                  <Link href="/UM_14001_de.pdf" download="UM/German" aria-label="UM/German"> Environmental management system ISO 14001: 2015 Language: German</Link>
                    </td>
                  <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg ">
                  <Link href="/UM_14001_en.pdf" download="UM/English" aria-label="UM/English"> ISO 14001: 2015 Environmental Management System Language: English</Link>
                    </td>
                  <td class="border-t-2 border-b-2 border-gray-200 w-10 text-center">
                  </td>
                </tr>
                <tr>
                  <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">ISO 9001:2015</td>
                  <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">Quality management system according to ISO 9001; 2015 Location: Slovakia 490354 SQM 15</td>
                  <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">German / English</td>
                  <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg ">
                  <Link href="/Certifikat-ISO-9001-ang.-XRAY-LAB-Slovensko-k.s_.pdf" download="SL/English" aria-label="SL/English">ISO 9001 EN Certificate Xray-Lab Slovensko</Link>
                  </td>
                  <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg">
                  <Link href="/EN-ISO-14001-2015_ANG.pdf" download="SL/German" aria-label="SL/German">ISO 14001 - 2016 Xray Lab Slovensko</Link>
                  </td>
                  <td class="border-t-2 border-b-2 border-gray-200 w-10 text-center">
                  </td>
                </tr>
                <tr>
                  <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">ISO 9001:2015 IQNet</td>
                  <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">International Certification Network Location Slovakia DE-490354 QM15</td>
                  <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">English</td>
                  <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg ">
                  <Link href="/490354 QM15 2021-01-19 IQNet.pdf" download="IQ/English" aria-label="IQ/English">IQNet International Certification Network Location: Slovakia / Language: English</Link>
                  </td>
                  <td class="border-t-2 border-b-2 border-gray-200 w-10 text-center">
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
       
          </div>
        </div>
      </section>
    </>
  )
}

export default Certificates;
