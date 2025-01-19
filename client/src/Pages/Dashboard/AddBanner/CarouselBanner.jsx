import { useState } from "react";
import { TbFidgetSpinner } from "react-icons/tb";
import { imageUpload } from "../../../api/utils";
import Swal from "sweetalert2";
import { addBanner } from "../../../api/banner";
// import { useOutletContext } from "react-router-dom";


const CarouselBanner = () => {

    const [loading, setLoading] = useState(false)
    // const { setActive } = useOutletContext();

    const [uploadButtonText1, setUploadButtonText1] = useState('Upload Image')
    const [uploadButtonText2, setUploadButtonText2] = useState('Upload Image')
    const [uploadButtonText3, setUploadButtonText3] = useState('Upload Image')
    const [uploadButtonText4, setUploadButtonText4] = useState('Upload Image')
    const [uploadButtonText5, setUploadButtonText5] = useState('Upload Image')

    const [uploadeimg1, setUploadimg1] = useState('');
    const [uploadeimg2, setUploadimg2] = useState('');
    const [uploadeimg3, setUploadimg3] = useState('');
    const [uploadeimg4, setUploadimg4] = useState('');
    const [uploadeimg5, setUploadimg5] = useState('');

    const handleImageChange1 = image => {
        setUploadButtonText1(image?.name)
    }
    const handleImageChange2 = image => {
        setUploadButtonText2(image?.name)
    }
    const handleImageChange3 = image => {
        setUploadButtonText3(image?.name)
    }
    const handleImageChange4 = image => {
        setUploadButtonText4(image?.name)
    }
    const handleImageChange5 = image => {
        setUploadButtonText5(image?.name)
    }

    const handleCategoryBAnner = async (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const type = form.type.value;
        const startDate = form.startDate.value;
        const deadLine = form.deadline.value;
        const image1 = form.image1.files[0];
        const image2 = form.image2.files[0];
        const image3 = form.image3.files[0];
        const image4 = form.image4.files[0];
        const image5 = form.image5.files[0];
        const imgUrl1 = form.imgUrl1.value;
        const imgUrl2 = form.imgUrl2.value;
        const imgUrl3 = form.imgUrl3.value;
        const imgUrl4 = form.imgUrl4.value;
        const imgUrl5 = form.imgUrl5.value;
        const desc = form.description.value;


        try {
            if (image1) {
                const image1Url = await imageUpload(image1)

                if (image1Url?.data?.display_url?.length > 0) {
                    setUploadimg1(image1Url.data.display_url)


                }
            }
            if (image2) {
                const image2Url = await imageUpload(image2)
                if (image2Url?.data?.display_url?.length > 0) {
                    setUploadimg2(image2Url.data.display_url)
                }


            }
            if (image3) {
                const image3Url = await imageUpload(image3)
                if (image3Url?.data?.display_url?.length > 0) {
                    setUploadimg3(image3Url.data.display_url)
                }

            }
            if (image4) {
                const image4Url = await imageUpload(image4)
                if (image4Url?.data?.display_url?.length > 0) {
                    setUploadimg4(image4Url.data.display_url)
                }

            }
            if (image5) {
                const image5Url = await imageUpload(image5)
                if (image5Url?.data?.display_url?.length > 0) {
                    setUploadimg5(image5Url.data.display_url)
                }

            }
        } catch (error) {
            console.error(error)
        }


        const uploadData = {
            title: title,
            type: type,
            startDate: startDate,
            deadLine: deadLine,
            image1: uploadeimg1,
            image2: uploadeimg2,
            image3: uploadeimg3,
            image4: uploadeimg4,
            image5: uploadeimg5,
            imageURL1: imgUrl1,
            imageURL2: imgUrl2,
            imageURL3: imgUrl3,
            imageURL4: imgUrl4,
            imageURL5: imgUrl5,
            desc: desc
        }
        console.log(uploadData)

        try {
            if (uploadeimg1.length <= 0 && imgUrl1.length <= 0) {
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: `Please Select Photo to upload`,
                    showConfirmButton: false,
                    timer: 1500
                });
            } else {
                setLoading(true)
                const data = await addBanner(uploadData)
                setUploadButtonText1('Upload Image')
                setUploadButtonText2('Upload Image')
                setUploadButtonText3('Upload Image')
                setUploadButtonText4('Upload Image')
                setUploadButtonText5('Upload Image')

                setLoading(false)
                if (data.insertedId) {
                    console.log(data)
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${title} upload successful`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }

            }

        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div className="mt-8 bg-slate-100 py-8">
            <h2 className="text-lg font-semibold text-center">Carousel Banner</h2>

            <form onSubmit={handleCategoryBAnner}>
                <div className='grid grid-cols-1  gap-10'>

                    <div className='space-y-1 text-sm'>
                        <label htmlFor='title' className='block text-gray-600'>
                            Title
                        </label>
                        <input
                            className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                            name='title'
                            id='title'
                            type='text'
                            placeholder='Title'
                            required
                        />
                    </div>
                    <div className='flex flex-row items-center justify-around gap-2 '>
                        <div className="space-y-1 text-sm">
                        <label htmlFor='type' className='block text-gray-600'>
                            Banner type
                        </label>
                        <select
                            required
                            className='w-full px-3 py-2 border-rose-300 focus:outline-rose-500 rounded-md'
                            name='type'
                            defaultValue=""
                        >
                            <option value={'carousel'}>carousel</option>
                            <option value={'shop by category'}>shop by category</option>
                            <option value={'offers'}>offers</option>
                            <option value={'Cloth'}>Cloth</option>

                        </select>
                        </div>

                        <div className='space-y-1 text-sm'>
                            <label htmlFor='title' className='block text-gray-600'>
                               Start Date
                            </label>
                            <input
                                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                name='startDate'
                                id='startDate'
                                type='datetime-local'
                                placeholder='Start Date'
                               
                            />
                        </div>

                        <div className='space-y-1 text-sm'>
                            <label htmlFor='title' className='block text-gray-600'>
                                Dead Line
                            </label>
                            <input
                                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                name='deadline'
                                id='deadline'
                                type='datetime-local'
                                placeholder='Deadline'
                                
                            />
                        </div>
                    </div>



                    {/* image uploade  */}
                    <div className='bg-white p-4'>
                        <div className=' grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4  w-full  m-auto rounded-lg'>
                            <div className='file_upload py-3 relative border-4 border-dotted border-gray-300 rounded-lg'>
                                <div className='flex flex-col items-center justify-center w-max mx-auto text-center'>
                                    <label>
                                        <input
                                            onChange={e => handleImageChange1(e.target.files[0])}
                                            className='text-sm cursor-pointer w-36 hidden'
                                            type='file'
                                            name='image1'
                                            id='image1'
                                            accept='image/*'
                                            hidden
                                        />
                                        <div className='bg-rose-500 text-xs text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-rose-500'>
                                            {uploadButtonText1}
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div className='file_upload py-3 relative border-4 border-dotted border-gray-300 rounded-lg'>
                                <div className='flex flex-col w-max mx-auto text-center'>
                                    <label>
                                        <input
                                            onChange={e => handleImageChange2(e.target.files[0])}
                                            className='text-sm cursor-pointer w-36 hidden'
                                            type='file'
                                            name='image2'
                                            id='image'
                                            accept='image/*'
                                            hidden
                                        />
                                        <div className='bg-rose-500 text-xs text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-rose-500'>
                                            {uploadButtonText2}
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div className='file_upload py-3 relative border-4 border-dotted border-gray-300 rounded-lg'>
                                <div className='flex flex-col w-max mx-auto text-center'>
                                    <label>
                                        <input
                                            onChange={e => handleImageChange3(e.target.files[0])}
                                            className='text-sm cursor-pointer w-36 hidden'
                                            type='file'
                                            name='image3'
                                            id='image'
                                            accept='image/*'
                                            hidden
                                        />
                                        <div className='bg-rose-500 text-xs text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-rose-500'>
                                            {uploadButtonText3}
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div className='file_upload py-3 relative border-4 border-dotted border-gray-300 rounded-lg'>
                                <div className='flex flex-col w-max mx-auto text-center'>
                                    <label>
                                        <input
                                            onChange={e => handleImageChange4(e.target.files[0])}
                                            className='text-sm cursor-pointer w-36 hidden'
                                            type='file'
                                            name='image4'
                                            id='image'
                                            accept='image/*'
                                            hidden
                                        />
                                        <div className='bg-rose-500 text-xs text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-rose-500'>
                                            {uploadButtonText4}
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div className='file_upload py-3 relative border-4 border-dotted border-gray-300 rounded-lg'>
                                <div className='flex flex-col w-max mx-auto text-center'>
                                    <label>
                                        <input
                                            onChange={e => handleImageChange5(e.target.files[0])}
                                            className='text-sm cursor-pointer w-36 hidden'
                                            type='file'
                                            name='image5'
                                            id='image'
                                            accept='image/*'
                                            hidden
                                        />
                                        <div className='bg-rose-500 text-xs text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-rose-600'>
                                            {uploadButtonText5}
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-4'>
                            <div className='space-y-1 text-sm'>
                                <label htmlFor='imgUrl' className='block text-gray-600'>
                                    Image URL-1
                                </label>
                                <input
                                    className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                    name='imgUrl1'
                                    id='imgUrl1'
                                    type='text'
                                    placeholder='Image URL -1'

                                />
                            </div>
                            <div className='space-y-1 text-sm'>
                                <label htmlFor='imgUrl' className='block text-gray-600'>
                                    Image URL-2
                                </label>
                                <input
                                    className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                    name='imgUrl2'
                                    id='imgUrl2'
                                    type='text'
                                    placeholder='Image URL -2'

                                />
                            </div>
                            <div className='space-y-1 text-sm'>
                                <label htmlFor='imgUrl' className='block text-gray-600'>
                                    Image URL-3
                                </label>
                                <input
                                    className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                    name='imgUrl3'
                                    id='imgUrl3'
                                    type='text'
                                    placeholder='Image URL -3'

                                />
                            </div>
                            <div className='space-y-1 text-sm'>
                                <label htmlFor='imgUrl' className='block text-gray-600'>
                                    Image URL-4
                                </label>
                                <input
                                    className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                    name='imgUrl4'
                                    id='imgUrl4'
                                    type='text'
                                    placeholder='Image URL -4'

                                />
                            </div>
                            <div className='space-y-1 text-sm'>
                                <label htmlFor='imgUrl' className='block text-gray-600'>
                                    Image URL-5
                                </label>
                                <input
                                    className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                    name='imgUrl5'
                                    id='imgUrl5'
                                    type='text'
                                    placeholder='Image URL -5'

                                />
                            </div>

                        </div>
                        <div className='space-y-1 text-sm'>
                            <label htmlFor='description' className='block text-gray-600'>
                                Description
                            </label>

                            <textarea
                                id='description'
                                className='block rounded-md focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  border border-rose-300 focus:outline-rose-500 '
                                name='description'
                            ></textarea>
                        </div>
                    </div>
                </div>

                <button
                    type='submit'
                    className='w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-rose-500'
                >
                    {loading ?
                        <TbFidgetSpinner className='animate-spin m-auto' />
                        : 'Save & Continue'}
                </button>
            </form>

        </div>
    );
};

export default CarouselBanner;