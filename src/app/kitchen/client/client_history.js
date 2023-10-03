// "use client"

import client_H_styles from "../../components/styles/client_H.module.css"
import Image from "next/image"
import client_HIcon from "../../../../public/images/icons/client_H_Img.jpg"
import { useState } from "react"
import { clientData } from "../../../../utils/clientHistoryData"

export default function Client_history() {
    
  // checks if user is logged in

  const [ loggedIn , setLogin ] = useState(true)

    return (
        <main className={client_H_styles.main}>
            <div className={client_H_styles.info}>
                <p className={client_H_styles.info_one}>History</p>
                <p className={client_H_styles.info_two}>View All</p>
            </div>

            {/* <div className={client_H_styles.H_container}>
                <div className={client_H_styles.H_one}>
                    <p className={client_H_styles.H_oneM}>You have no previous Client updates</p>
                    
                    <p className={client_H_styles.H_oneS}>Create your first client</p>
                    <p className={client_H_styles.H_oneSs}>Just click the ___ to begin</p>
                </div>
                <Image className={client_H_styles.H_img} src={client_HIcon} alt="image of article" />
            </div> */}

            <div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" fill="#0D0B0B"/>
            <rect width="1440" height="1024" transform="translate(-421 -640)" fill="white"/>
            <g clip-path="url(#clip0_711_2)">
            <rect x="-63" y="-133" width="1033" height="473" rx="10" fill="white"/>
            <circle cx="12" cy="12" r="30" fill="#9FF1CA"/>
            <path d="M19 6.41L17.59 5L7 15.59V9H5V19H15V17H8.41L19 6.41Z" fill="#049561"/>
            </g>
            <rect x="-62.5" y="-132.5" width="1032" height="472" rx="9.5" stroke="#999999"/>
            <defs>
            <clipPath id="clip0_711_2">
            <rect x="-63" y="-133" width="1033" height="473" rx="10" fill="white"/>
            </clipPath>
            </defs>
            </svg>
            <ul>
                 {
                clientData.map((data) => {
                    <li key={data.id}>
                        {data.typeOfSale}
                        {data.nameOfClient}
                        {data.date}
                        {data.discount}
                    </li>
                })
                }
            </ul>
           
            </div>
        </main>
    )
}