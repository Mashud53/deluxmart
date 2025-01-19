import { Helmet } from "react-helmet-async";
import AddProductForm from "../../../Components/Form/AddProductForm";
import { productimageUpload } from "../../../api/utils";
import { useState } from "react";
import { addProduct } from "../../../api/product";
import Swal from "sweetalert2";
import { useOutletContext } from "react-router-dom";
import useMenus from "../../../Hooks/useMenus";
import useSubmenus from "../../../Hooks/useSubmenus";



const AddProduct = () => {
    const [loading, setLoading] = useState(false)
    const { setActive } = useOutletContext();
    const [allMenus, isLoading, refetch] = useMenus();
    const [subMenus, subLoading, subrefetch] = useSubmenus()
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

    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = e.target;
        const title = form.title.value;
        const brand = form.brand.value;
        const category = form.category.value;
        const type = form.type.value;
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

        const price1 = parseFloat(form.price1.value);
        const price2 = parseFloat(form.price2.value);
        const price3 = parseFloat(form.price3.value);
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


        // ================================ 
        try {
            if (image1) {
                const image1Url = await productimageUpload(image1)
                
                if (image1Url?.data?.display_url?.length > 0) {
                    setUploadimg1(image1Url.data.display_url)
                    

                }
            }
            if(image2){
                const image2Url =  await productimageUpload(image2)
                if(image2Url?.data?.display_url?.length > 0){
                    setUploadimg2(image2Url.data.display_url)
                }
                
              
            }
            if(image3){
                const image3Url = await productimageUpload(image3)
                if(image3Url?.data?.display_url?.length > 0){
                    setUploadimg3(image3Url.data.display_url)
                }
               
            }
            if(image4){
                const image4Url = await productimageUpload(image4)
                if(image4Url?.data?.display_url?.length > 0){
                    setUploadimg4(image4Url.data.display_url)
                }
               
            }
            if(image5){
                const image5Url = await productimageUpload(image5)
                if(image5Url?.data?.display_url?.length > 0){
                    setUploadimg5(image5Url.data.display_url)
                }
               
            }
        } catch (error) {
            console.error(error)
        }
        console.log('img url1=======', uploadeimg1)
        console.log('img url2=======', uploadeimg2)
        console.log('img url3=======', uploadeimg3)
        console.log('img url4=======', uploadeimg4)
        console.log('img url5=======', uploadeimg5)

        // const image2Url = image2 && await productimageUpload(image2)
        // if (image2Url?.data?.display_url?.length > 0) {

        //     setUploadimg2(image2Url.data.display_url)
        //     console.log('img url2=======', uploadeimg2)

        // }
        // const image3Url = image3 && await productimageUpload(image3)
        // if (image3Url?.data?.display_url?.length > 0) {
        //     setUploadimg3(image3Url.data.display_url)
        //     console.log('img url3=======', uploadeimg3)

        // }
        // const image4Url = image4 && await productimageUpload(image4)
        // if (image4Url?.data?.display_url?.length > 0) {

        //     setUploadimg4(image4Url.data.display_url)

        // }
        // const image5Url = image5 && await productimageUpload(image5)
        // if (image5Url?.data?.display_url?.length > 0) {
        //     setUploadimg5(image5Url?.data.display_url)

        // }
        // ================================ 

        const productData = {
            name: title, brand, category, type, price1, price2, price3,
            storage1, storage2, storage3, color1, color2, color3, color4, color5, color6, operatingSystem,
            network, wirelessNetwork, screen, screenSize, connector, desc, desc1, desc2, desc3, desc4, desc5, productType,
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
        }
        console.log(productData)
        try {
            setLoading(true)
            const data = await addProduct(productData)
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
        } catch (err) {
            console.log(err)
        }



    }

    return (
        <div onClick={() => setActive(true)} className="md:py-10">
            <Helmet><title>My Shop || Add Product</title></Helmet>
            <h2 className="text-xl text-center font-bold uppercase pt-8 pb-4 border-b-2">Add Product</h2>
            <div className="mt-8">
                <AddProductForm handleSubmit={handleSubmit}
                    handleImageChange1={handleImageChange1}
                    handleImageChange2={handleImageChange2}
                    handleImageChange3={handleImageChange3}
                    handleImageChange4={handleImageChange4}
                    handleImageChange5={handleImageChange5}
                    uploadButtonText1={uploadButtonText1}
                    uploadButtonText2={uploadButtonText2}
                    uploadButtonText3={uploadButtonText3}
                    uploadButtonText4={uploadButtonText4}
                    uploadButtonText5={uploadButtonText5}
                    loading={loading}
                    allMenus={allMenus}
                    isLoading={isLoading}
                    refetch={refetch}
                    subMenus={subMenus}
                    subLoading={subLoading}
                    subrefetch={subrefetch}>

                </AddProductForm>
            </div>

        </div>
    );
};

export default AddProduct;