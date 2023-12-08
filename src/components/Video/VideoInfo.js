import React from 'react';
import { faCheckCircle, faMusic } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';

import PopperWrapper from '~/components/Popper/Wrapper';
import AccountPreview from '../AccountSidebar/AccountPreview';
import Button from '../Button/Button';
import image from '~/assets/img/IMG_2416.jpeg';

function VideoInfo() {
    const renderPreview = (attrs) => {
        return (
            <div className='bg-white rounded-lg' tabIndex='-1' {...attrs}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div>
            <div className='flex items-center mt-4 justify-between w-[624px]'>
                <div>
                    <div className='flex items-center gap-x-2 py-2 px-3 w-full'>
                        <div>
                            <Tippy
                                placement='bottom'
                                offset={[70, 0]}
                                interactive
                                delay={[800, 0]}
                                render={renderPreview}
                            >
                                <img
                                    className='w-[56px] h-[56px] object-cover rounded-[50%] cursor-pointer'
                                    src={image}
                                    alt=''
                                />
                            </Tippy>
                        </div>
                        <div className='flex-1 flex flex-col gap-y-1'>
                            <div className='flex gap-x-1'>
                                <Tippy
                                    placement='bottom'
                                    offset={[70, 0]}
                                    interactive
                                    delay={[800, 0]}
                                    render={renderPreview}
                                >
                                    <span className='username text-[18px] font-bold text-[#161823] cursor-pointer '>
                                        Mai Anh Tú
                                    </span>
                                </Tippy>

                                <FontAwesomeIcon
                                    style={{
                                        color: '#20D5EC',
                                    }}
                                    icon={faCheckCircle}
                                />
                            </div>
                            <p className='nickname font-medium text-[#161823bf]'>
                                tus.protein
                            </p>
                            <div className='flex gap-x-2'>
                                <FontAwesomeIcon
                                    style={{
                                        width: 14,
                                        height: 14,
                                        color: '#161823',
                                    }}
                                    icon={faMusic}
                                />
                                <p className='text-[14px] text-[#161823]'>
                                    link nhac
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <Button
                    style={{
                        height: 36,
                        padding: '0 22px',
                    }}
                    outline
                >
                    Follow
                </Button>
            </div>
        </div>
    );
}

export default VideoInfo;
