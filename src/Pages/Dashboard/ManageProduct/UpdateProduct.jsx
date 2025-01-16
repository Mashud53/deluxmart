import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { TbFidgetSpinner } from "react-icons/tb";
import { useLoaderData } from "react-router-dom";
import { updateProduct } from "../../../api/product";
import Swal from "sweetalert2";
import useMenus from "../../../Hooks/useMenus";
import useSubmenus from "../../../Hooks/useSubmenus";


const UpdateProduct = () => {

    const product = useLoaderData()
    const [allMenus] = useMenus();
    const [subMenus] = useSubmenus()
    const { _id, name, image1, image2, image3, image4, image5, imageURL1, imageURL2, imageURL3, imageURL4, imageURL5, category, type, brand, price1, price2, price3, currentPrice1, currentPrice2, currentPrice3, storage1, storage2, storage3, color1, color2, color3, color4, color5, color6, storageType, operatingSystem, operating_system, network, wirelessNetwork, wireless_network, screen, connector, screenSize, productType, desc, desc1, desc2, desc3, desc4, desc5 } = product;
    const [loading, setLoading] = useState(false)
    console.log(product)

    // const [uploadButtonText1, setUploadButtonText1] = useState(image1)
    // const [uploadButtonText2, setUploadButtonText2] = useState(image2)
    // const [uploadButtonText3, setUploadButtonText3] = useState(image3)
    // const [uploadButtonText4, setUploadButtonText4] = useState(image4)
    // const [uploadButtonText5, setUploadButtonText5] = useState(image5)

    // const handleImageChange1 = image=>{
    //     setUploadButtonText1(image?.name)
    // }
    // const handleImageChange2 = image=>{
    //     setUploadButtonText2(image?.name)
    // }
    // const handleImageChange3 = image=>{
    //     setUploadButtonText3(image?.name)
    // }
    // const handleImageChange4 = image=>{
    //     setUploadButtonText4(image?.name)
    // }
    // const handleImageChange5 = image=>{
    //     setUploadButtonText5(image?.name)
    // }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = e.target;
        const title = form.title.value;
        const brand = form.brand.value;
        const category = form.category.value;
        const type = form.type.value;
        // const image1 = form.image1.files[0];
        // const image2 = form.image2.files[0];
        // const image3 = form.image3.files[0];
        // const image4 = form.image4.files[0];
        // const image5 = form.image5.files[0];
        const imgUrl1 = form.imgUrl1.value;
        const imgUrl2 = form.imgUrl2.value;
        const imgUrl3 = form.imgUrl3.value;
        const imgUrl4 = form.imgUrl4.value;
        const imgUrl5 = form.imgUrl5.value;

        const price1 = parseFloat(form.price1.value);
        const price2 = parseFloat(form.price2.value);
        const price3 = parseFloat(form.price3.value);
        const currentPrice1 = parseFloat(form.discountPrice1.value);
        const currentPrice2 = parseFloat(form.discountPrice2.value);
        const currentPrice3 = parseFloat(form.discountPrice3.value);
        const storage1 = form.storage1.value;
        const storage2 = form.storage2.value;
        const storage3 = form.storage3.value;
        const color1 = form.color1.value;
        const color2 = form.color2.value;
        const color3 = form.color3.value;
        const color4 = form.color4.value;
        const color5 = form.color5.value;
        const color6 = form.color6.value;
        const productType = form.productType.value;
        const operatingSystem = form.operatingSystem.value;
        const network = form.network.value;
        const wirelessNetwork = form.wirelessNetwork.value;
        const screen = form.screen.value;
        const screenSize = form.screenSize.value;
        const connector = form.connector.value;
        const desc = form.description.value;
        const desc1 = form.description1.value;
        const desc2 = form.description2.value;
        const desc3 = form.description3.value;
        const desc4 = form.description4.value;
        const desc5 = form.description5.value;
        console.log(currentPrice1, currentPrice2, currentPrice3)
        // const image1Url = image1 && await  imageUpload(image1)
        // const image2Url = image2 &&  await imageUpload(image2)
        // const image3Url = image3 && await imageUpload(image3)
        // const image4Url = image4 && await imageUpload(image4)
        // const image5Url = image5 && await  imageUpload(image5)
        // const images = [image1Url, image2Url, image3Url, image4Url, image5Url]


        const productData = {
            name: title, brand, category, type, price1, price2, price3, currentPrice1, currentPrice2, currentPrice3,
            storage1, storage2, storage3, color1, color2, color3, color4, color5, color6, operatingSystem,
            network, wirelessNetwork, screen, screenSize, connector, desc, desc1, desc2, desc3, desc4, desc5, productType,
            image1, image2, image3, image4, image5,
            imageURL1: imgUrl1,
            imageURL2: imgUrl2,
            imageURL3: imgUrl3,
            imageURL4: imgUrl4,
            imageURL5: imgUrl5,
        }
        console.log(productData)
        try {
            setLoading(true)
            const data = await updateProduct(_id, productData)

            setLoading(false)
            console.log(data)
            if (data.modifiedCount > 0) {

                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${title} updated successful`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        } catch (err) {
            console.log(err)
        }

    }


    return (
        <div>
            <Helmet><title>Dashboard | Update Product</title></Helmet>
            <div className="text-xl text-center font-bold uppercase pt-8 pb-4 border-b-2"><h2>Update Product</h2></div>

            <div className='mt-8 w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50'>
                <form onSubmit={handleSubmit}>
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
                                defaultValue={name ? name : ''}
                                placeholder={name}
                                required
                            />
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                            <div className='space-y-1 text-sm'>
                                <label htmlFor='category' className='block text-gray-600'>
                                    Category
                                </label>
                                <select
                                    required
                                    className='w-full px-4 py-3 border-rose-300 focus:outline-rose-500 rounded-md'
                                    name='category'
                                    defaultValue={category ? category: ""}
                                >
                                    <option value="" disabled>
                                        Select a category
                                    </option>
                                    {
                                        allMenus && allMenus.map(item => (
                                            <option value={item.menu} key={item._id}>

                                                {item.menu}
                                            </option>
                                        ))}

                                </select>
                            </div>
                            <div className='space-y-1 text-sm'>
                            <label htmlFor='type' className='block text-gray-600'>
                                Type
                            </label>
                            <select
                                required
                                className='w-full px-4 py-3 border-rose-300 focus:outline-rose-500 rounded-md'
                                name='type'
                                defaultValue={type? type :""}
                            >
                                <option value="" disabled>Select product type</option>                             

                                {
                                    subMenus && subMenus.map(item => (
                                        <option value={item.name} key={item._id}>

                                            {item.name}
                                        </option>
                                    ))}

                            </select>
                        </div>
                            
                           
                            <div className='space-y-1 text-sm'>
                                <label htmlFor='brand' className='block text-gray-600'>
                                    Brand
                                </label>
                                <select

                                    className='w-full px-4 py-3 border-rose-300 focus:outline-rose-500 rounded-md'
                                    name='brand'
                                    defaultValue={brand ? brand : ''}
                                >
                                    <option value={'Apple'}>Apple</option>
                                    <option value={'Samsung'}>Samsung</option>
                                    <option value={'Google_Pixel'}>Google Pixel</option>
                                    <option value={'Xiaomi'}>Xiaomi</option>
                                    <option value={'One_PlUs'}>One Plus</option>
                                    <option value={'Oppo'}>Oppo</option>
                                    <option value={'Vivo'}>Vivo</option>
                                    <option value={'Huwei'}>Huwei</option>
                                    <option value={'Realme'}>Realme</option>
                                    <option value={'Sony'}>Sony</option>
                                    <option value={'Honor'}>Honor</option>
                                    <option value={'Hp'}>Hp</option>
                                    <option value={'Dell'}>Dell</option>
                                    <option value={'Lenovo'}>Lenovo</option>
                                    <option value={'Unknown'}>Unknown</option>

                                </select>
                            </div>
                            {/* <div className='space-y-1 text-sm'>
                            <label htmlFor='brand' className='block text-gray-600'>
                                Brand Name
                            </label>
                            <input
                                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                name='brand'
                                id='brand'
                                type='text'
                                placeholder='Brand Name'

                            />
                        </div> */}
                        </div>
                        {/* ---------------------sub Category and meta data-------------------------  */}
                        {/* <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div className='space-y-1 text-sm'>
                            <label htmlFor='subCategory' className='block text-gray-600'>
                                Sub Category
                            </label>
                            <select
                                required
                                className='w-full px-4 py-3 border-rose-300 focus:outline-rose-500 rounded-md'
                                name='category'
                            >
                                <option value={'Apple'}>Apple</option>
                                <option value={'Samsung'}>Samsung</option>
                                <option value={'Google_Pixel'}>Google Pixel</option>
                                <option value={'Xiaomi'}>Xiaomi</option>
                                <option value={'One_Plus'}>One Plus</option>
                                <option value={'Oppo'}>Oppo</option>
                                <option value={'Sony'}>Sony</option>
                                <option value={'Huwei'}>Huwei</option>
                                <option value={'Realme'}>Sony</option>
                                <option value={'Vivo'}>Vivo</option>
                                <option value={'Honor'}>Honor</option>
                                <option value={'Lenovo'}>Lenovo</option>
                                <option value={'Lenovo'}>Lenovo</option>
                                <option value={'Lenovo'}>Lenovo</option>

                                
                            </select>
                        </div>
                        <div className='space-y-1 text-sm'>
                            <label htmlFor='type' className='block text-gray-600'>
                                Type
                            </label>
                            <select
                                required
                                className='w-full px-4 py-3 border-rose-300 focus:outline-rose-500 rounded-md'
                                name='type'
                            >
                                <option value={'Smartphone'}>Smartphone</option>
                                <option value={'Laptop'}>Laptop</option>
                                <option value={'iPad'}>iPad</option>
                                <option value={'Cloth'}>Cloth</option>
                                <option value={'Headphone'}>Headphone</option>
                                <option value={'Men'}>Men</option>
                                <option value={'Router'}>Router</option>
                                <option value={'Charger'}>Charger</option>
                                <option value={'PowerBank'}>Power Bank</option>
                                <option value={'Other'}>Other</option>

                            </select>
                        </div>                        
                       
                    </div> */}


                        {/* image uploade  */}
                        <div className='bg-white p-4'>
                            {/* <div className=' grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4  w-full  m-auto rounded-lg'>
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
                                            defaultValue={image1 ? image1:''}
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
                                            defaultValue={image2 ? image2: ''}
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
                                            defaultValue={image3 ? image3: ''}
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
                                            defaultValue={image4 ? image4: ''}
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
                                            defaultValue={image5 ? image5: ''}
                                            hidden
                                        />
                                        <div className='bg-rose-500 text-xs text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-rose-600'>
                                            {uploadButtonText5}
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div> */}
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
                                        defaultValue={imageURL1 ? imageURL1 : ''}
                                        placeholder={imageURL1}

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
                                        defaultValue={imageURL2}
                                        placeholder={imageURL2 ? imageURL2 : ''}

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
                                        defaultValue={imageURL3 ? imageURL3 : ''}
                                        placeholder={imageURL3}

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
                                        defaultValue={imageURL4 ? imageURL4 : ''}
                                        placeholder={imageURL4}

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
                                        defaultValue={imageURL5 ? imageURL5 : ''}
                                        placeholder={imageURL5}

                                    />
                                </div>

                            </div>
                        </div>
                        <div className='flex justify-between gap-2'>
                            <div>
                                <div className='space-y-1 text-sm'>
                                    <label htmlFor='price' className='block text-gray-600'>
                                        Price-1
                                    </label>
                                    <input
                                        className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                        name='price1'
                                        id='price'
                                        type='number'
                                        defaultValue={price1 ? price1 : ''}
                                        placeholder={price1}
                                        min="0"
                                        step="0.01"
                                        pattern="^\d+(?:\.\d{1,2})?$"

                                        required
                                    />
                                </div>
                                <div className='space-y-1 text-sm'>
                                    <label htmlFor='price' className='block text-gray-600'>
                                        Price-2
                                    </label>
                                    <input
                                        className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                        name='price2'
                                        id='price'
                                        type='number'
                                        defaultValue={price2 ? price2 : ''}
                                        placeholder={price2}

                                    />
                                </div>
                                <div className='space-y-1 text-sm'>
                                    <label htmlFor='price' className='block text-gray-600'>
                                        Price-3
                                    </label>
                                    <input
                                        className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                        name='price3'
                                        id='price'
                                        type='number'
                                        defaultValue={price3 ? price3 : ''}
                                        placeholder={price3}

                                    />
                                </div>
                                <div className='space-y-1 text-sm'>
                                    <label htmlFor='productType' className='block text-gray-600'>
                                        Product Type
                                    </label>
                                    <select
                                        required
                                        className='w-full px-4 py-3 border-rose-300 focus:outline-rose-500 rounded-md'
                                        name='productType'
                                        defaultValue={productType ? productType : ''}
                                    >
                                        <option value={'New'}>
                                            New
                                        </option>
                                        <option value={'Used'}>Used</option>
                                    </select>
                                </div>

                            </div>
                            <div>
                                <div className='space-y-1 text-sm'>
                                    <label htmlFor='price' className='block text-gray-600'>
                                        Discount Price-1
                                    </label>
                                    <input
                                        className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                        name='discountPrice1'
                                        id='discountPrice'
                                        type='number'
                                        defaultValue={currentPrice1 ? parseFloat(currentPrice1) : ''}
                                        placeholder={currentPrice1 ? currentPrice1 : ''}
                                        min="0"
                                        step="0.01"
                                        pattern="^\d+(?:\.\d{1,2})?$"


                                    />
                                </div>
                                <div className='space-y-1 text-sm'>
                                    <label htmlFor='price' className='block text-gray-600'>
                                        Discount Price-2
                                    </label>
                                    <input
                                        className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                        name='discountPrice2'
                                        id='discountPrice'
                                        type='number'
                                        defaultValue={currentPrice2 ? currentPrice2 : ''}
                                        placeholder={currentPrice2 ? currentPrice2 : ''}

                                    />
                                </div>
                                <div className='space-y-1 text-sm'>
                                    <label htmlFor='price' className='block text-gray-600'>
                                        Discount Price-3
                                    </label>
                                    <input
                                        className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                        name='discountPrice3'
                                        id='discountPrice'
                                        type='number'
                                        defaultValue={currentPrice3 ? currentPrice3 : ''}
                                        placeholder={currentPrice3 ? currentPrice3 : ''}

                                    />
                                </div>


                            </div>

                            <div>
                                <div className='space-y-1 text-sm'>
                                    <label htmlFor='storage' className='block text-gray-600'>
                                        Storage-1
                                    </label>
                                    <input
                                        className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                        name='storage1'
                                        id='storage'
                                        type='text'
                                        placeholder={storage1}
                                        defaultValue={storage1 ? storage1 : ''}


                                    />
                                </div>
                                <div className='space-y-1 text-sm'>
                                    <label htmlFor='storage' className='block text-gray-600'>
                                        Storage-2
                                    </label>
                                    <input
                                        className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                        name='storage2'
                                        id='storage'
                                        type='text'
                                        placeholder={storage2}
                                        defaultValue={storage2 ? storage2 : ''}

                                    />
                                </div>
                                <div className='space-y-1 text-sm'>
                                    <label htmlFor='storage' className='block text-gray-600'>
                                        Storage-3
                                    </label>
                                    <input
                                        className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                        name='storage3'
                                        id='storage'
                                        type='text'
                                        placeholder={storage3}
                                        defaultValue={storage3 ? storage3 : ''}

                                    />
                                </div>
                                <div className='space-y-1 text-sm'>
                                    <label htmlFor='storageType' className='block text-gray-600'>
                                        Storage Type
                                    </label>
                                    <input
                                        className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                        name='storageType'
                                        id='storageType'
                                        type='text'
                                        placeholder={storageType}
                                        defaultValue={storageType ? storageType : ''}

                                    />
                                </div>
                            </div>
                        </div>

                        <div className='grid grid-cols-3 md:grid-cols-6 justify-between gap-2'>
                            <div className='space-y-1 text-sm'>
                                <label htmlFor='colors' className='block text-gray-600'>
                                    Color-1
                                </label>
                                <input
                                    className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                    name='color1'
                                    id='color'
                                    type='text'
                                    placeholder={color1}
                                    defaultValue={color1 ? color1 : ''}

                                />
                            </div>
                            <div className='space-y-1 text-sm'>
                                <label htmlFor='colors' className='block text-gray-600'>
                                    Color-2
                                </label>
                                <input
                                    className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                    name='color2'
                                    id='color'
                                    type='text'
                                    placeholder={color2}
                                    defaultValue={color2 ? color2 : ''}

                                />
                            </div>
                            <div className='space-y-1 text-sm'>
                                <label htmlFor='colors' className='block text-gray-600'>
                                    Color-3
                                </label>
                                <input
                                    className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                    name='color3'
                                    id='color'
                                    type='text'
                                    placeholder={color3}
                                    defaultValue={color3 ? color3 : ''}

                                />
                            </div>
                            <div className='space-y-1 text-sm'>
                                <label htmlFor='colors' className='block text-gray-600'>
                                    Color-4
                                </label>
                                <input
                                    className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                    name='color4'
                                    id='color'
                                    type='text'
                                    placeholder={color4}
                                    defaultValue={color4 ? color4 : ''}

                                />
                            </div>
                            <div className='space-y-1 text-sm'>
                                <label htmlFor='colors' className='block text-gray-600'>
                                    Color-5
                                </label>
                                <input
                                    className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                    name='color5'
                                    id='color'
                                    type='text'
                                    placeholder={color5}
                                    defaultValue={color5 ? color5 : ''}

                                />
                            </div>
                            <div className='space-y-1 text-sm'>
                                <label htmlFor='colors' className='block text-gray-600'>
                                    Color-6
                                </label>
                                <input
                                    className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                    name='color6'
                                    id='color'
                                    type='text'
                                    placeholder={color6}
                                    defaultValue={color6 ? color6 : ''}

                                />
                            </div>


                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>

                            <div className='space-y-1 text-sm'>
                                <label htmlFor='operating_system' className='block text-gray-600'>
                                    Operating System
                                </label>
                                <input
                                    className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                    name='operatingSystem'
                                    id='operatingSystem'
                                    type='text'
                                    placeholder={operating_system}
                                    defaultValue={operating_system ? operating_system : operatingSystem ? operatingSystem : ''}

                                />
                            </div>
                            <div className='space-y-1 text-sm'>
                                <label htmlFor='network' className='block text-gray-600'>
                                    Network
                                </label>
                                <input
                                    className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                    name='network'
                                    id='network'
                                    type='text'
                                    placeholder={network}
                                    defaultValue={network ? network : ''}

                                />
                            </div>
                            <div className='space-y-1 text-sm'>
                                <label htmlFor='wireless_network' className='block text-gray-600'>
                                    Wireless Network
                                </label>
                                <input
                                    className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                    name='wirelessNetwork'
                                    id='wirelessNetwork'
                                    type='text'
                                    placeholder={wireless_network}
                                    defaultValue={wireless_network ? wireless_network : wirelessNetwork ? wirelessNetwork : ''}

                                />
                            </div>
                            <div className='space-y-1 text-sm'>
                                <label htmlFor='screen' className='block text-gray-600'>
                                    Screen
                                </label>
                                <input
                                    className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                    name='screen'
                                    id='screen'
                                    type='text'
                                    placeholder={screen}
                                    defaultValue={screen ? screen : ''}

                                />
                            </div>
                            <div className='space-y-1 text-sm'>
                                <label htmlFor='screenSize' className='block text-gray-600'>
                                    Screen Size
                                </label>
                                <input
                                    className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                    name='screenSize'
                                    id='screenSize'
                                    type='text'
                                    placeholder={screenSize}
                                    defaultValue={screenSize ? screenSize : ''}

                                />
                            </div>
                            <div className='space-y-1 text-sm'>
                                <label htmlFor='connector' className='block text-gray-600'>
                                    Connector
                                </label>
                                <input
                                    className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                    name='connector'
                                    id='connector'
                                    type='text'
                                    placeholder={connector}
                                    defaultValue={connector ? connector : ''}

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
                                defaultValue={desc ? desc : ''}
                            ></textarea>
                        </div>
                        <div className='space-y-1 text-sm'>
                            <label htmlFor='description1' className='block text-gray-600'>
                                Description
                            </label>

                            <textarea
                                id='description1'
                                className='block rounded-md focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  border border-rose-300 focus:outline-rose-500 '
                                name='description1'
                                defaultValue={desc1 ? desc1 : ''}
                            ></textarea>
                        </div>
                        <div className='space-y-1 text-sm'>
                            <label htmlFor='description2' className='block text-gray-600'>
                                Description
                            </label>

                            <textarea
                                id='description2'
                                className='block rounded-md focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  border border-rose-300 focus:outline-rose-500 '
                                name='description2'
                                defaultValue={desc2 ? desc2 : ''}
                            ></textarea>
                        </div>
                        <div className='space-y-1 text-sm'>
                            <label htmlFor='description3' className='block text-gray-600'>
                                Description
                            </label>

                            <textarea
                                id='description3'
                                className='block rounded-md focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  border border-rose-300 focus:outline-rose-500 '
                                name='description3'
                                defaultValue={desc3 ? desc3 : ''}
                            ></textarea>
                        </div>
                        <div className='space-y-1 text-sm'>
                            <label htmlFor='description4' className='block text-gray-600'>
                                Description
                            </label>

                            <textarea
                                id='description4'
                                className='block rounded-md focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  border border-rose-300 focus:outline-rose-500 '
                                name='description4'
                                defaultValue={desc4 ? desc4 : ''}
                            ></textarea>
                        </div>
                        <div className='space-y-1 text-sm'>
                            <label htmlFor='description5' className='block text-gray-600'>
                                Description
                            </label>

                            <textarea
                                id='description5'
                                className='block rounded-md focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  border border-rose-300 focus:outline-rose-500 '
                                name='description5'
                                defaultValue={desc5 ? desc5 : ''}
                            ></textarea>
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


        </div>
    );
};

export default UpdateProduct;