import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from '../page.module.scss';

async function getData(id) {
    const res = await fetch(`https://picsum.photos/id/${id}/info`);

    return res.json();
}

const Photo = async ({ params }) => {
    const data = await getData(params.id);
    console.log(data);

  return (
    <div>
        <h1 className={styles.h1}>{data.author}</h1>
        <Image src={data.download_url} width={data.width} height={data.height} alt='' layout='responsive'/>
        <Link href={data.url}>Lien vers la ssource de l&apos;image</Link>
    </div>
  )
}

export default Photo