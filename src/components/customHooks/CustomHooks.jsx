
import { useFetch } from '../../hooks/useFetch'

import '../useEffect/effects.css'

export const CustomHooks = () => {
    
    const {loading, data} =useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/1`)
    const {quote, author} = !!data && data[0];

    return (
        <>
    
            <h2>Breaking Bad Quotes</h2>
            <hr />

            {loading? 
                (<div className='alert alert-info text-center'>Loading!!!</div>)
                
                :

                (<blockquote className='blockquote text-center'>
                    <p className='mb-0'>{quote}</p>
                    
                    <footer className='blockquote-footer mt-2'>{author}</footer>
                </blockquote>)     
        }    
        </>
    )
}
