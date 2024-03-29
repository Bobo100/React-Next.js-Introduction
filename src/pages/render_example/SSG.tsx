import React, { useEffect } from 'react';
import Layout from '../../components/layout';
import Head from 'next/head';
import Image from 'next/image';
import profilePic from '../../../public/images/profile.jpg';

type Props = {
    content: string;
    time: string;
};

const SsgPage = ({ time, content }: Props) => {

    useEffect(() => {
        console.log("SSG Page");
    }, []);

    return (
        <Layout>
            <Head>
                <title>SSG Page</title>
            </Head>
            <div>
                <h1>SSG Page</h1>
                <p>{content}</p>
                <p>build的時候的時間 {time}，因為這是SSG，所以這個時間不會再變動。</p>
            </div>
            <h1>遠端圖片測試</h1>
            <Image src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png" alt="Picture of the author" width={500} height={500} />
            <h1>本地端圖片測試</h1>
            <Image
                src={profilePic}
                alt="Picture of the author"
                width={500}
                height={500}
            />
            <h1>本地端圖片測試2</h1>
            <Image
                src="/images/profile.jpg"
                alt="Picture of the author"
                width={500}
                height={500}
            />
        </Layout>

    );
};

export async function getStaticProps() {
    // 在這裡撰寫程式碼，來取得資料，然後再將資料傳遞給元件。
    const content = "這是從getStaticProps中取得的資料。也就是說，我們可以在這裡撰寫程式碼，來取得資料，然後再將資料傳遞給元件。";

    return {
        props: {
            content,
            time: new Date().toISOString()
        }
    };
}

export default SsgPage;
