import React from 'react'
import ApparelSection from './ApparelSection'
import ChooseRegionSection from './ChooseRegionSection'
import DealsSection from './DealsSection'
import ElectronicsSection from './ElectronicsSection'
import PageCategory from './PageCategory'
import RequestForQuotationSection from './RequestForQuotationSection'

const Main = () => {
  return (
    <>
    <div className='container'>
        <PageCategory/>
        <DealsSection/>
        <ApparelSection/>
        <ElectronicsSection/>
        <RequestForQuotationSection/>
        <ChooseRegionSection/>
        </div>
    </>
  )
}

export default Main