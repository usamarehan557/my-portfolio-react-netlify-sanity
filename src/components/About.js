import React, {useEffect, useState} from "react";
import sanityClient from "../client";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import background from "../wallpaper4.gif";

 
const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source)
}

export default function About() {
    const [author, setAuthor] = useState(null);

    useEffect(() => {
        sanityClient.fetch(
            `*[_type == "author"]{
            name,
            bio,
            "authorImage": image.asset->url
        }`)
        .then((data) => setAuthor(data[0]))
        .catch(console.error);
    }, []);

    if(!author) return <div>Loading...</div>

    return (
        <main>
            <img 
                src={background}
                alt="about me"
                className="absolute object-cover w-full h-full"
            />
            <div className="p-10 lg:pt-40 container mx-auto relative">
                <section className="bg-transparent rounded-lg shadow-2xl lg:flex p-20">
                    <img 
                        src={urlFor(author.authorImage).url()}
                        className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8"
                        alt="author.name"
                    />
                    <div className="text-lg flex flex-col justify-center">
                        <h1 className="cursive text-6xl text-green-300 mb-4">hey there. I'm {" "}<br/>
                            <span className="text-green-100">{author.name}</span>
                        </h1>
                        <div className="prose lg:prose-xl text-white">
                            <BlockContent blocks={author.bio} projectId="28bxmiyn"/>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}