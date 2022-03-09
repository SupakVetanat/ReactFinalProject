import React from 'react'
import Title from '../Components/Title'
import { InnerLayout, MainLayout } from '../styles/Layout'
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ContactItem from '../Components/ContactItem';

const ContactPage = () => {
    const Phone = <PhoneIphoneIcon />
    const Mail = <EmailIcon />
    const Location = <LocationOnIcon />
  return (
    <MainLayout>
            <Title title={'Contact me'} span={'Contact me'}/>
              <InnerLayout>
                <ContactItem title={'Phone'} detail={'098-398-8696'} logo={Phone}/>
                
                <ContactItem title={'Email'} detail={'ve.supak_st@tni.ac.th'} logo={Mail}/>
                
                <ContactItem title={'Address'} detail={'70/134 Soi Ramkhamhaeng176 Road Ramkhamhaeng District Minburi Bangkok 10510'} logo={Location}/>
                </InnerLayout>
             
    </MainLayout>
  )
}

export default ContactPage