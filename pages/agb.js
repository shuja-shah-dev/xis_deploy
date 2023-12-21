import React from 'react'
import { Roboto, Lato } from "next/font/google";

const roboto = Roboto({
    weight: ["100", "300", "400", "500", "700"],
    subsets: ["latin"],
});


const Agb = () => {
    return (
        <section className="terms-and-conditions">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap w-full mb-20">
                    <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 ">Terms and Conditions (GTC</h1>
                        <div className="h-1 w-20 bg-[#57C8E7] rounded"></div>
                    </div>
                </div>
                <div className="flex flex-wrap -m-4">
                    <div className="w-full p-4">
                        <div className="bg-gray-900 p-6 w-full sm:w-1/2 rounded-lg mb-10">
                            <img className="h-40 rounded w-full object-center mb-6" src="/Asset.png" alt="XisAi" />
                        </div>
                        <div className="w-full">
                            <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4">
                                General terms and conditions of business
                            </h2>
                            <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4">
                                As of: October 1, 2017
                            </h2>
                            <p className='font-medium mb-4 text-center text-xl sm:text-2xl'>§1 Scope</p>
                            <p class="leading-relaxed text-lg mb-4">
                                XRAY-LAB Industrial Services GmbH Co. KG, abbreviated as XRAY-LAB, carries out the work assigned to it as a contractor within the meaning of § 631 BGB exclusively on the basis of these general terms and conditions of business and payment. By placing the order with XRAY-LAB, the customer expressly accepts these terms and conditions. The terms and conditions apply for the duration of the entire business relationship, even if they are not expressly agreed again. Differing conditions must be expressly agreed in writing. Without such an express agreement, conditions contrary to these general terms and conditions of business and payment will not be recognized by us. Any invalidity of individual provisions of these terms and conditions of business and payment does not affect the validity and effectiveness of the rest of the conditions. If individual conditions are unavoidable, the contractual partners are obliged to proceed in accordance with what is actually intended.</p>
                            <p className='font-medium mb-4 text-center text-xl sm:text-2xl'>§2 Conclusion of the contract, remuneration</p>
                            <p class="leading-relaxed text-lg mb-4">
                                Offers from XRAY-LAB are subject to change and non-binding. After the order has been placed, the contract for work is only concluded through express confirmation from XRAY-LAB or through execution of the assigned work.</p>
                            <p className='font-medium mb-4 text-center text-xl sm:text-2xl'>§3 Payment conditions</p>
                            <p class="leading-relaxed text-lg mb-4">
                                XRAY-LAB charges the customer the remuneration in accordance with the contractual agreement. Waiting times for material to be made available or other delays that are not caused by us must be taken into account. Payments are due within 2 weeks of the invoice being issued without deductions. After this period, XRAY-LAB reserves the right to charge default interest. If XRAY-LAB is forced to hire a lawyer after the third reminder, the entire legal fees will be charged. XRAY-LAB is entitled, despite the customer's provisions to the contrary, to initially offset payments against the customer's older debts and will inform the customer about the type of offsetting that has taken place. If costs and interest have already been incurred, XRAY-LAB is entitled to offset the payment first against the costs, then against the interest and finally against the main service. A payment is only considered to have been made when XRAY-LAB can dispose of the amount.</p>
                            <p className='font-medium mb-4 text-center text-xl sm:text-2xl'>§4 Interim invoices</p>
                            <p class="leading-relaxed text-lg mb-4">
                                XRAY-LAB is entitled to create interim invoices for completed parts and agreed services. XRAY-LAB is also entitled to create interim invoices for fixed periods, approximately one week each.</p>
                            <p className='font-medium mb-4 text-center text-xl sm:text-2xl'>§5 Delay in delivery, liability, warranty</p>
                            <p class="leading-relaxed text-lg mb-4">
                                XRAY-LAB undertakes to carry out the work assigned to it on time in accordance with the contractual agreement. Delays in delivery or service due to force majeure and events that make delivery significantly more difficult or impossible for the seller, not only temporarily - these include, in particular, strikes, lockouts, official orders and so on, even if they occur at suppliers of XRAY-LAB or whose sub-suppliers are involved - XRAY-LAB is not responsible even if deadlines and dates have been bindingly agreed. There is no obligation to pay compensation. Any warranty claims of the purchaser must be reported to XRAY-LAB immediately upon becoming aware of them. You are initially limited to the right of repair or replacement delivery. If the repair or replacement delivery fails after a reasonable period of time, the purchaser can, at his discretion, request a reduction in the remuneration (reduction) or reversal of the contract (cancellation). Warranty claims against XRAY-LAB are only available to the purchaser directly and cannot be assigned. XRAY-LAB's liability for damages arising from its contractual work is excluded unless there is gross negligence or even intentional breach of contract. In the event of any liability claims, there is liability insurance in the amount of €5 million per damaging event per year for personal injury and/or property damage. There is insurance cover of €50,000 for customer goods/equipment and machines located on XRAY-LAB's premises in the event of fire/water and theft damage.</p>
                            <p className='font-medium mb-4 text-center text-xl sm:text-2xl'>§6 Occupational safety, occupational safety
                            </p>
                            <p class="leading-relaxed text-lg mb-4">
                                The work of the XRAY-LAB employee at the client is subject to the public law regulations of occupational safety law applicable to the client's business; The resulting obligations for the employer are the responsibility of the client, without prejudice to the obligations of the contractor. The client ensures that all accident prevention and occupational safety regulations applicable at the employee's place of employment as well as the provisions of the Working Hours Act (ArbZG) are adhered to and that first aid facilities and measures are guaranteed. The client must inform the employee about the workplace-specific dangers that arise during the activities to be carried out and about the measures to avert them before the employment begins. If the employee is exposed to chemical, physical or biological influences while working in the client's company or carries out hazardous activities within the meaning of BGV A 4, the client must carry out an occupational medical check-up before starting this activity. In the event of an accident at work, the client must notify the contractor immediately.</p>
                            <p className='font-medium mb-4 text-center text-xl sm:text-2xl'>§7 German law; Place of jurisdiction
                            </p>
                            <p class="leading-relaxed text-lg mb-4">
                                The law of the Federal Republic of Germany applies to these terms and conditions and the entire legal relationship between XRAY-LAB and the customer. If the customer is a full merchant within the meaning of the Commercial Code, a legal entity under public law or a special fund under public law, the Maulbronn District Court or Karlsruhe Regional Court is the exclusive place of jurisdiction for all disputes arising directly or indirectly from the contractual relationship. Should a provision in these terms and conditions or a provision within the framework of other agreements be or become invalid, this will not affect the effectiveness of all other provisions or agreements.</p>
                            <p className='font-medium mb-4 text-center text-xl sm:text-2xl text-[#57C8E7]'>
                                <a href="/AGB_en.pdf" download="AGB">Download General Terms and Conditions of XRAY-LAB Industrial Services GmbH & Co. KG as PDF</a></p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Agb;
