import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../Button/Button';
import image from '~/assets/img/IMG_2416.jpeg';

function AccountPreview() {
    return (
        <div className='py-3 px-5 w-[320px] text-[#161823]'>
            <div className='flex justify-between items-center'>
                <img
                    className='w-[44px] h-[44px] object-cover rounded-[50%]'
                    src={image}
                    alt=''
                />
                <Button
                    style={{
                        height: 34,
                        paddingLeft: 30,
                        paddingRight: 30,
                    }}
                    outline
                >
                    Follow
                </Button>
            </div>
            <div className='flex-1 my-3'>
                <div className='flex gap-x-1'>
                    <span className='username text-[18px] font-bold'>
                        Mai Anh Tú
                    </span>
                    <FontAwesomeIcon
                        style={{
                            color: '#20D5EC',
                        }}
                        icon={faCheckCircle}
                    />
                </div>
                <p className='nickname text-[14px] font-medium text-[#161823bf] mt-1'>
                    tus.protein
                </p>
            </div>
            <div className='flex gap-x-4'>
                <div className='flex gap-x-1'>
                    <span className='text-[18px] font-bold'>6.7M</span>
                    <p className='text-[#161823bf] font-medium'>Followers</p>
                </div>
                <div className='flex gap-x-1'>
                    <span className='text-[18px] font-bold'>6.7M</span>
                    <p className='text-[#161823bf] font-medium'>Likes</p>
                </div>
            </div>
        </div>
    );
}

export default AccountPreview;
