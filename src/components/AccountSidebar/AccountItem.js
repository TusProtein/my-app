import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';

import PopperWrapper from '~/components/Popper/Wrapper';
import AccountPreview from './AccountPreview';
import image from '~/assets/img/IMG_2416.jpeg';

function AccountItem() {
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
        <>
            <div>
                <Tippy
                    placement='bottom'
                    offset={[-20, 0]}
                    interactive
                    delay={[800, 0]}
                    render={renderPreview}
                >
                    <div className='flex gap-x-2 py-2 px-3 cursor-pointer hover:bg-[#16182308]'>
                        <img
                            className='w-[32px] h-[32px] object-cover rounded-[50%]'
                            src={image}
                            alt=''
                        />
                        <div className='flex-1'>
                            <div className='flex gap-x-1'>
                                <span className='username text-[14px] text-[#161823]'>
                                    Mai Anh Tú
                                </span>
                                <FontAwesomeIcon
                                    style={{
                                        color: '#20D5EC',
                                    }}
                                    icon={faCheckCircle}
                                />
                            </div>
                            <p className='nickname text-[14px] font-medium text-[#161823bf]'>
                                tus.protein
                            </p>
                        </div>
                    </div>
                </Tippy>
            </div>
        </>
    );
}

export default AccountItem;
