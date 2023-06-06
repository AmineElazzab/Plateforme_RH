

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Avatar, Grid } from "@nextui-org/react";


import { Input } from '~components/ui';
import { FaUserSecret } from 'react-icons/fa'
import { Calendar, Search, Notification } from 'react-iconly'
// import AssetfulSymbol from '../../../public/assetful.svg';
// import notificationSFX from './notification.mp3';

type Props = {};

export default function TopBar({ }: Props) {

  const imageStyle = {
    objectFit: "contain",
  };

  return (
    <>

      <div className="z-[999]  sticky flex justify-between  items-center min-h-[65px] top-0 pt-1 pb-2 px-2 md:px-7 bg-slate-50 border-b-2 border-gray-200">

        <div className='text-gray-600 font-normal'>

          Dashboard
        </div>

        <div className='flex items-center justify-between space-x-5 mr-4'>
          <Input
            name="search"
            type="text"
            className='w-full pl-12'
            placeholder="Search"
            leadingAddOn={() => (
              <div className="flex items-center mr-2">
                <Search size='medium' set="light" primaryColor="#B5B5B5" />
                <span className="border-l border-gray-400 h-5 mx-1.5"></span>
              </div>
            )}

          />
          <Calendar size='xlarge' set="light" primaryColor="#B5B5B5" />
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <Notification size='large' set="light" primaryColor="#B5B5B5" />

            <div
              style={{
                position: 'absolute',
                top: '0px',
                right: '0px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '17px',
                height: '17px',
                backgroundColor: '#F9B700',
                borderRadius: '50%',
                color: 'white',
                fontSize: '14px',
                fontWeight: 'bold',
              }}
            >
              5 
            </div>
          </div>

          <div className="flex flex-wrap justify-center ">
            <Avatar
              size="lg"
              src="/assets/images/director.png"
              zoomed
              stacked
              bordered
              pointer
              color='default'
            />
          </div>


        </div>



      </div>
    </>
  );
}
