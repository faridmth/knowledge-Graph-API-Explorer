import { NextResponse } from 'next/server';

export const GET = async(req,{params}) => {
    const apiKey = process.env.GOOGLE_API_KEY;
    const { entity,lang } = params;
    try{
        let data = await fetch(`https://kgsearch.googleapis.com/v1/entities:search?query=${entity}&key=${apiKey}&languages=${lang}&limit=500&indent=True`)
        data = await data.json()
        return NextResponse.json(data)

    }catch(err){
        return NextResponse.json(err);
    }
}
