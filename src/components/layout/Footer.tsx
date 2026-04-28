"use client";

import React from 'react';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="relative z-10 bg-black text-sandstone-200 font-sans">
      <div className="max-w-[1440px] mx-auto px-8 md:px-12 pt-16 pb-16">
        
        {/* Top Section: Logo & Payment Options */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between text-gray-400 gap-10 lg:gap-2 mb-10 lg:mb-16">
          {/* Logo - Humanly */}
          <div className="text-white">
             <h2 className="text-2xl font-bold tracking-tighter">HUMANLY</h2>
          </div>

          <div className="hidden lg:flex flex-row items-center gap-2">
            <p className="text-sm text-gray-500 mr-2 font-sans">Major Cards Accepted</p>
            <div className="flex flex-row gap-2 items-center">
              
              {/* PayPal */}
              <div className="flex h-8.5 items-center justify-center rounded-sm bg-white px-2 py-1.5">
                <svg aria-hidden="true" fill="none" height="24" viewBox="0 0 29 26" width="26" xmlns="http://www.w3.org/2000/svg">
                  <path clipRule="evenodd" d="M3.60838 17.5913H1.4046C1.25379 17.5913 1.12553 17.7009 1.10201 17.8497L0.210686 23.5009C0.19297 23.6125 0.279328 23.713 0.392438 23.713H1.44455C1.59536 23.713 1.72362 23.6034 1.74713 23.4542L1.98753 21.93C2.01072 21.7808 2.1393 21.6713 2.28979 21.6713H2.98743C4.43915 21.6713 5.27692 20.9688 5.49583 19.5767C5.59441 18.9677 5.50001 18.4892 5.21474 18.1539C4.90158 17.7861 4.34595 17.5913 3.60838 17.5913ZM3.86264 19.6553C3.74215 20.4461 3.13793 20.4461 2.55371 20.4461H2.22115L2.45445 18.9692C2.46831 18.88 2.54564 18.8143 2.63588 18.8143H2.78829C3.18626 18.8143 3.56171 18.8143 3.75572 19.0411C3.87129 19.1765 3.90678 19.3775 3.86264 19.6553ZM10.196 19.63H9.1407C9.05078 19.63 8.97309 19.6957 8.95922 19.7851L8.91254 20.0802L8.83873 19.9733C8.61027 19.6416 8.10087 19.5308 7.59236 19.5308C6.42607 19.5308 5.43007 20.4141 5.23606 21.6531C5.13526 22.2711 5.27856 22.8621 5.62915 23.2742C5.95081 23.6532 6.411 23.8111 6.95843 23.8111C7.89806 23.8111 8.41924 23.2068 8.41924 23.2068L8.37212 23.5002C8.35438 23.6123 8.44072 23.7128 8.55316 23.7128H9.50382C9.65503 23.7128 9.78253 23.6032 9.80639 23.4541L10.3768 19.842C10.3948 19.7309 10.3088 19.63 10.196 19.63ZM8.72495 21.684C8.6231 22.2869 8.14456 22.6916 7.53435 22.6916C7.2279 22.6916 6.98289 22.5933 6.82572 22.4071C6.66973 22.2222 6.61038 21.9588 6.66004 21.6657C6.75518 21.0678 7.24177 20.65 7.84274 20.65C8.14232 20.65 8.38599 20.7494 8.54645 20.9373C8.7072 21.1272 8.77103 21.392 8.72495 21.684ZM14.7561 19.6298H15.8166C15.9652 19.6298 16.0518 19.7964 15.9674 19.9182L12.4402 25.0096C12.3831 25.0921 12.289 25.1411 12.1885 25.1411H11.1293C10.9801 25.1411 10.8931 24.9732 10.9794 24.8511L12.0777 23.3008L10.9096 19.8727C10.8692 19.7536 10.9572 19.6298 11.0839 19.6298H12.126C12.2614 19.6298 12.3809 19.7187 12.4199 19.8483L13.0398 21.9187L14.5026 19.7642C14.5598 19.6801 14.655 19.6298 14.7561 19.6298Z" fill="#253B80" fillRule="evenodd"></path>
                  <path clipRule="evenodd" d="M26.2544 23.501L27.1589 17.7465C27.1727 17.6571 27.2501 17.5914 27.3401 17.5911H28.3583C28.4707 17.5911 28.5571 17.6919 28.5393 17.8034L27.6474 23.4543C27.6241 23.6034 27.4959 23.713 27.3448 23.713H26.4355C26.323 23.713 26.2367 23.6125 26.2544 23.501ZM19.3278 17.5914H17.1236C16.9732 17.5914 16.8449 17.701 16.8214 17.8498L15.9301 23.501C15.9123 23.6125 15.9987 23.713 16.1112 23.713H17.2422C17.3473 23.713 17.4372 23.6364 17.4536 23.532L17.7066 21.9301C17.7298 21.7808 17.8584 21.6714 18.0088 21.6714H18.7061C20.1581 21.6714 20.9958 20.9689 21.2148 19.5768C21.3137 18.9678 21.2187 18.4892 20.9336 18.154C20.6206 17.7861 20.0654 17.5914 19.3278 17.5914ZM19.5821 19.6554C19.4619 20.4462 18.8576 20.4462 18.2731 20.4462H17.9408L18.1745 18.9693C18.1884 18.8801 18.265 18.8143 18.3555 18.8143H18.5079C18.9057 18.8143 19.2814 18.8143 19.4753 19.0411C19.591 19.1765 19.6262 19.3776 19.5821 19.6554ZM25.9149 19.63H24.8603C24.7696 19.63 24.6927 19.6958 24.6791 19.7851L24.6324 20.0802L24.5583 19.9733C24.3299 19.6417 23.8208 19.5309 23.3122 19.5309C22.146 19.5309 21.1503 20.4141 20.9562 21.6532C20.8557 22.2711 20.9985 22.8621 21.349 23.2743C21.6713 23.6532 22.1309 23.8111 22.6783 23.8111C23.6179 23.8111 24.139 23.2069 24.139 23.2069L24.092 23.5002C24.0743 23.6124 24.1606 23.7129 24.2738 23.7129H25.224C25.3745 23.7129 25.5027 23.6033 25.5263 23.4541L26.097 19.8421C26.1144 19.731 26.0281 19.63 25.9149 19.63ZM24.4439 21.684C24.3427 22.287 23.8636 22.6917 23.2532 22.6917C22.9473 22.6917 22.7019 22.5934 22.5446 22.4071C22.3886 22.2222 22.33 21.9589 22.379 21.6657C22.4746 21.0679 22.9606 20.65 23.5616 20.65C23.8613 20.65 24.1048 20.7495 24.2654 20.9374C24.4268 21.1272 24.4906 21.3921 24.4439 21.684Z" fill="#179BD7" fillRule="evenodd"></path>
                </svg>
              </div>

              {/* Apple Pay */}
              <div className="flex h-8.5 items-center justify-center rounded-sm bg-white px-2 py-1.5 border border-black/10">
                <svg aria-hidden="true" viewBox="0 0 512 210.2" width="40" height="18" xmlns="http://www.w3.org/2000/svg">
                  <path d="M93.6,27.1C87.6,34.2,78,39.8,68.4,39c-1.2-9.6,3.5-19.8,9-26.1c6-7.3,16.5-12.5,25-12.9 C103.4,10,99.5,19.8,93.6,27.1 M102.3,40.9c-13.9-0.8-25.8,7.9-32.4,7.9c-6.7,0-16.8-7.5-27.8-7.3c-14.3,0.2-27.6,8.3-34.9,21.2 c-15,25.8-3.9,64,10.6,85c7.1,10.4,15.6,21.8,26.8,21.4c10.6-0.4,14.8-6.9,27.6-6.9c12.9,0,16.6,6.9,27.8,6.7 c11.6-0.2,18.9-10.4,26-20.8c8.1-11.8,11.4-23.3,11.6-23.9c-0.2-0.2-22.4-8.7-22.6-34.3c-0.2-21.4,17.5-31.6,18.3-32.2 C123.3,42.9,107.7,41.3,102.3,40.9 M182.6,11.9v155.9h24.2v-53.3h33.5c30.6,0,52.1-21,52.1-51.4c0-30.4-21.1-51.2-51.3-51.2H182.6z  M206.8,32.3h27.9c21,0,33,11.2,33,30.9c0,19.7-12,31-33.1,31h-27.8V32.3z M336.6,169c15.2,0,29.3-7.7,35.7-19.9h0.5v18.7h22.4V90.2 c0-22.5-18-37-45.7-37c-25.7,0-44.7,14.7-45.4,34.9h21.8c1.8-9.6,10.7-15.9,22.9-15.9c14.8,0,23.1,6.9,23.1,19.6v8.6l-30.2,1.8 c-28.1,1.7-43.3,13.2-43.3,33.2C298.4,155.6,314.1,169,336.6,169z M343.1,150.5c-12.9,0-21.1-6.2-21.1-15.7c0-9.8,7.9-15.5,23-16.4 l26.9-1.7v8.8C371.9,140.1,359.5,150.5,343.1,150.5z M425.1,210.2c23.6,0,34.7-9,44.4-36.3L512,54.7h-24.6l-28.5,92.1h-0.5 l-28.5-92.1h-25.3l41,113.5l-2.2,6.9c-3.7,11.7-9.7,16.2-20.4,16.2c-1.9,0-5.6-0.2-7.1-0.4v18.7C417.3,210,423.3,210.2,425.1,210.2z " fill="currentColor" />
                </svg>
              </div>

              {/* Google Pay */}
              <div className="flex h-8.5 items-center justify-center rounded-sm bg-white px-2 py-1.5 border border-black/10">
                <svg aria-hidden="true" viewBox="0 0 80 38.1" width="40" height="18" xmlns="http://www.w3.org/2000/svg">
                  <path d="M37.8,19.7V29h-3V6h7.8c1.9,0,3.7,0.7,5.1,2c1.4,1.2,2.1,3,2.1,4.9c0,1.9-0.7,3.6-2.1,4.9c-1.4,1.3-3.1,2-5.1,2 L37.8,19.7L37.8,19.7z M37.8,8.8v8h5c1.1,0,2.2-0.4,2.9-1.2c1.6-1.5,1.6-4,0.1-5.5c0,0-0.1-0.1-0.1-0.1c-0.8-0.8-1.8-1.3-2.9-1.2 L37.8,8.8L37.8,8.8z" fill="#5F6368"></path><path d="M56.7,12.8c2.2,0,3.9,0.6,5.2,1.8s1.9,2.8,1.9,4.8V29H61v-2.2h-0.1c-1.2,1.8-2.9,2.7-4.9,2.7 c-1.7,0-3.2-0.5-4.4-1.5c-1.1-1-1.8-2.4-1.8-3.9c0-1.6,0.6-2.9,1.8-3.9c1.2-1,2.9-1.4,4.9-1.4c1.8,0,3.2,0.3,4.3,1v-0.7 c0-1-0.4-2-1.2-2.6c-0.8-0.7-1.8-1.1-2.9-1.1c-1.7,0-3,0.7-3.9,2.1l-2.6-1.6C51.8,13.8,53.9,12.8,56.7,12.8z M52.9,24.2 c0,0.8,0.4,1.5,1,1.9c0.7,0.5,1.5,0.8,2.3,0.8c1.2,0,2.4-0.5,3.3-1.4c1-0.9,1.5-2,1.5-3.2c-0.9-0.7-2.2-1.1-3.9-1.1 c-1.2,0-2.2,0.3-3,0.9C53.3,22.6,52.9,23.3,52.9,24.2z" fill="#5F6368"></path><path d="M80,13.3l-9.9,22.7h-3l3.7-7.9l-6.5-14.7h3.2l4.7,11.3h0.1l4.6-11.3H80z" fill="#5F6368"></path><path d="M25.9,17.7c0-0.9-0.1-1.8-0.2-2.7H13.2v5.1h7.1c-0.3,1.6-1.2,3.1-2.6,4v3.3H22C24.5,25.1,25.9,21.7,25.9,17.7z" fill="#4285F4"></path><path d="M13.2,30.6c3.6,0,6.6-1.2,8.8-3.2l-4.3-3.3c-1.2,0.8-2.7,1.3-4.5,1.3c-3.4,0-6.4-2.3-7.4-5.5H1.4v3.4 C3.7,27.8,8.2,30.6,13.2,30.6z" fill="#34A853"></path><path d="M5.8,19.9c-0.6-1.6-0.6-3.4,0-5.1v-3.4H1.4c-1.9,3.7-1.9,8.1,0,11.9L5.8,19.9z" fill="#FBBC04"></path><path d="M13.2,9.4c1.9,0,3.7,0.7,5.1,2l0,0l3.8-3.8c-2.4-2.2-5.6-3.5-8.8-3.4c-5,0-9.6,2.8-11.8,7.3l4.4,3.4 C6.8,11.7,9.8,9.4,13.2,9.4z" fill="#EA4335"></path>
                </svg>
              </div>

              {/* Visa */}
              <div className="flex h-8.5 items-center justify-center rounded-sm bg-white px-2 py-1.5 border border-black/10">
                <svg aria-hidden="true" fill="none" height="12" viewBox="0 0 23 8" width="30" xmlns="http://www.w3.org/2000/svg">
                  <path clipRule="evenodd" d="M5.76483 7.60344H3.77942L2.2906 1.92351C2.21993 1.66224 2.06989 1.43125 1.84918 1.32239C1.29838 1.0488 0.691425 0.831074 0.0292969 0.721262V0.502585H3.22764C3.66906 0.502585 4.00013 0.831074 4.0553 1.21258L4.82779 5.3097L6.81223 0.502585H8.74247L5.76483 7.60344ZM9.84607 7.60344H7.97101L9.51501 0.502585H11.3901L9.84607 7.60344ZM13.8159 2.46979C13.871 2.08734 14.2021 1.86866 14.5883 1.86866C15.1953 1.81376 15.8564 1.92357 16.4082 2.1962L16.7393 0.667356C16.1875 0.448679 15.5806 0.338867 15.0298 0.338867C13.2099 0.338867 11.8856 1.32244 11.8856 2.68752C11.8856 3.726 12.8236 4.27127 13.4858 4.59976C14.2021 4.9273 14.478 5.14598 14.4228 5.47352C14.4228 5.96484 13.871 6.18352 13.3202 6.18352C12.6581 6.18352 11.996 6.01974 11.39 5.74616L11.0589 7.27595C11.7211 7.54859 12.4374 7.6584 13.0995 7.6584C15.1401 7.71236 16.4082 6.72973 16.4082 5.25485C16.4082 3.39751 13.8159 3.28864 13.8159 2.46979ZM22.9706 7.60344L21.4817 0.502585H19.8826C19.5515 0.502585 19.2204 0.721262 19.1101 1.0488L16.3531 7.60344H18.2834L18.6687 6.56591H21.0403L21.261 7.60344H22.9706ZM20.1584 2.41464L20.7092 5.09083H19.1652L20.1584 2.41464Z" fill="#172b85" fillRule="evenodd"></path>
                </svg>
              </div>

              {/* Mastercard */}
              <div className="flex h-8.5 items-center justify-center rounded-sm bg-white px-2 py-1.5 border border-black/10">
                <svg aria-hidden="true" fill="none" height="20" viewBox="0 0 36 22" width="30" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.9603 2.31934H13.4662V19.3805H22.9603V2.31934Z" fill="#FF5F00"></path><path d="M14.069 10.8504C14.0675 9.2073 14.4399 7.58539 15.1579 6.10744C15.8759 4.6295 16.9207 3.33427 18.2133 2.31982C16.6126 1.06167 14.6903 0.27924 12.6659 0.0619689C10.6416 -0.155303 8.59703 0.201351 6.76583 1.09116C4.93462 1.98097 3.39071 3.36804 2.31056 5.09382C1.23041 6.81961 0.657593 8.81448 0.657593 10.8504C0.657593 12.8864 1.23041 14.8812 2.31056 16.607C3.39071 18.3328 4.93462 19.7199 6.76583 20.6097C8.59703 21.4995 10.6416 21.8561 12.6659 21.6389C14.6903 21.4216 16.6126 20.6392 18.2133 19.381C16.9207 18.3666 15.8759 17.0713 15.1579 15.5934C14.4399 14.1155 14.0675 12.4935 14.069 10.8504Z" fill="#EB001B"></path><path d="M35.7684 10.8504C35.7685 12.8863 35.1957 14.8812 34.1156 16.607C33.0355 18.3328 31.4917 19.7198 29.6605 20.6097C27.8293 21.4995 25.7848 21.8561 23.7605 21.6389C21.7362 21.4216 19.8139 20.6392 18.2133 19.381C19.5047 18.3655 20.5487 17.0701 21.2666 15.5924C21.9844 14.1147 22.3574 12.4933 22.3574 10.8504C22.3574 9.20756 21.9844 7.58615 21.2666 6.10845C20.5487 4.63074 19.5047 3.3353 18.2133 2.31982C19.8139 1.06166 21.7362 0.279236 23.7605 0.061967C25.7848 -0.155302 27.8293 0.201358 29.6605 1.09118C31.4917 1.981 33.0355 3.36807 34.1156 5.09386C35.1957 6.81964 35.7685 8.8145 35.7684 10.8504Z" fill="#F79E1B"></path>
                </svg>
              </div>

              {/* AMEX */}
              <div className="flex h-8.5 items-center justify-center rounded-sm bg-[#1F72CD] px-1.5 py-1.5">
                <svg aria-hidden="true" fill="none" height="12" viewBox="0 0 24 6" width="36" xmlns="http://www.w3.org/2000/svg" className="text-white">
                  <path clipRule="evenodd" d="M3.06297 0.130859L0.473877 5.86045H3.57339L3.95764 4.94691H4.83595L5.2202 5.86045H8.63189V5.16321L8.93589 5.86045H10.7007L11.0047 5.14847V5.86045H18.1001L18.9629 4.97064L19.7707 5.86045L23.4151 5.86782L20.8178 3.01165L23.4151 0.130859H19.8272L18.9874 1.00423L18.205 0.130859H10.4861L9.82328 1.60971L9.14491 0.130859H6.05187V0.804374L5.70779 0.130859H3.06297ZM13.6588 0.94514H17.7333L18.9795 2.29127L20.2659 0.94514H21.5121L19.6186 3.01151L21.5121 5.05407H20.2093L18.9631 3.69231L17.6702 5.05407H13.6588V0.94514ZM14.6647 2.54686V1.79633V1.79561H17.207L18.3164 2.9959L17.1579 4.20274H14.6647V3.38338H16.8875V2.54686H14.6647ZM3.66283 0.94514H5.17367L6.89102 4.83041V0.94514H8.5461L9.87255 3.73086L11.095 0.94514H12.7418V5.0565H11.7398L11.7316 1.83486L10.2707 5.0565H9.37435L7.90529 1.83486V5.0565H5.84386L5.45305 4.13478H3.34166L2.95166 5.05569H1.84717L3.66283 0.94514ZM3.70224 3.28246L4.39786 1.64051L5.09267 3.28246H3.70224Z" fill="currentColor" fillRule="evenodd"></path>
                </svg>
              </div>

            </div>
          </div>
        </div>


        {/* Main Content Section */}
        <div className="flex lg:flex-row flex-col-reverse gap-12">
          
          {/* Newsletter Column */}
          <div className="w-full lg:w-64 xl:w-96 shrink-0 grow-0 flex flex-col gap-6">
            <span className="text-2xl md:text-3xl text-[#a8a5a0] font-serif leading-tight font-light tracking-tight">
              Receive articles, tips, and offers from Humanly
            </span>
            
            <div className="flex flex-col gap-4">
              <form className="relative w-full xl:w-80" onSubmit={(e) => e.preventDefault()}>
                <input 
                  aria-label="Email address" 
                  autoComplete="email" 
                  className="w-full rounded-xl bg-[#4a4741] placeholder-white/60 text-white pl-5 py-3 pr-12 tracking-wide focus:outline-none focus:ring-1 focus:ring-white/20 transition-all" 
                  placeholder="Email address" 
                  required 
                  type="email" 
                />
                <button 
                  aria-label="submit email for newsletter" 
                  className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 flex items-center justify-center bg-transparent rounded-lg transition-colors text-white/60 hover:text-white" 
                  type="submit"
                >
                  <svg aria-hidden="true" fill="none" height="12" viewBox="0 0 21 12" width="21" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4">
                    <path d="M20.5303 6.53033C20.8232 6.23744 20.8232 5.76256 20.5303 5.46967L15.7574 0.696699C15.4645 0.403806 14.9896 0.403806 14.6967 0.696699C14.4038 0.989593 14.4038 1.46447 14.6967 1.75736L18.9393 6L14.6967 10.2426C14.4038 10.5355 14.4038 11.0104 14.6967 11.3033C14.9896 11.5962 15.4645 11.5962 15.7574 11.3033L20.5303 6.53033ZM0 6.75H20V5.25H0V6.75Z" fill="currentColor"></path>
                  </svg>
                </button>
              </form>
              
              <div className="text-xs text-[#a8a5a0] font-sans">
                <p>We care about protecting your data.</p>
                <p>Read more in our <Link href="/privacy-policy" className="underline hover:text-white transition-colors">Privacy Policy</Link>.</p>
              </div>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full">
            
            {/* Our Company */}
            <div className="flex flex-col gap-4">
              <span className="text-base font-bold text-[#a8a5a0]">Our Company</span>
              <ul className="flex flex-col gap-2 text-sandstone-200">
                {['About Us', 'Leadership', 'Impact', 'Careers', 'Newsroom'].map((link) => (
                  <li key={link}><Link href="#" className="hover:text-white transition-colors">{link}</Link></li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div className="flex flex-col gap-4">
              <span className="text-base font-bold text-[#a8a5a0]">Support</span>
              <ul className="flex flex-col gap-2 text-sandstone-200">
                {['Help Center', 'Resident Support', 'Leasing Help', 'Financial FAQs', 'Contact'].map((link) => (
                  <li key={link}><Link href="#" className="hover:text-white transition-colors">{link}</Link></li>
                ))}
              </ul>
            </div>

            {/* Partner With Us */}
            <div className="flex flex-col gap-4">
              <span className="text-base font-bold text-[#a8a5a0]">Partner With Us</span>
              <ul className="flex flex-col gap-2 text-sandstone-200">
                {['Municipalities', 'Investors', 'Developers', 'Affiliates'].map((link) => (
                  <li key={link}><Link href="#" className="hover:text-white transition-colors">{link}</Link></li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div className="flex flex-col gap-4">
              <span className="text-base font-bold text-[#a8a5a0]">Connect</span>
              <ul className="flex flex-col gap-2 text-sandstone-200">
                {['Blog', 'LinkedIn', 'Instagram', 'X', 'YouTube'].map((link) => (
                  <li key={link}><Link href="#" className="hover:text-white transition-colors">{link}</Link></li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-white/10 mt-12 mb-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <div className="flex flex-col gap-4">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-[#a8a5a0] text-xs">
              {['Terms & Conditions', 'Privacy Policy', 'Accessibility', 'IP Notice', 'Security Center'].map((link) => (
                <li key={link}><Link href="#" className="hover:text-white transition-colors">{link}</Link></li>
              ))}
            </ul>
            <p className="text-xs text-[#a8a5a0]">
              © 2026 Humanly. All rights reserved. HUMANLY, HUMANLY OS, and the Humanly logo are trademarks of Humanly.
            </p>
          </div>

          <button type="button" className="border border-white/20 rounded-full py-2 px-6 text-white flex flex-row gap-2 items-center hover:bg-white/5 transition-all text-sm">
            <svg aria-hidden="true" fill="none" height="16" viewBox="0 0 19 20" width="16" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.5 19.5C8.1975 19.5 6.96833 19.2503 5.8125 18.751C4.65667 18.2517 3.64867 17.5718 2.7885 16.7115C1.92817 15.8513 1.24833 14.8433 0.749 13.6875C0.249667 12.5317 0 11.3025 0 10C0 8.68717 0.249667 7.45542 0.749 6.30475C1.24833 5.15408 1.92817 4.14867 2.7885 3.2885C3.64867 2.42817 4.65667 1.74833 5.8125 1.249C6.96833 0.749667 8.1975 0.5 9.5 0.5C10.8128 0.5 12.0446 0.749667 13.1953 1.249C14.3459 1.74833 15.3513 2.42817 16.2115 3.2885C17.0718 4.14867 17.7517 5.15408 18.251 6.30475C18.7503 7.45542 19 8.68717 19 10C19 11.3025 18.7503 12.5317 18.251 13.6875C17.7517 14.8433 17.0718 15.8513 16.2115 16.7115C15.3513 17.5718 14.3459 18.2517 13.1953 18.751C12.0446 19.2503 10.8128 19.5 9.5 19.5Z" fill="currentColor"></path>
            </svg>
            English
          </button>
        </div>

      </div>
    </footer>
  );
};
