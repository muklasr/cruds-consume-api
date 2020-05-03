import * as React from 'react';
import ImageLoading, { Fallback, LoadingPlaceholder } from 'react-image-loading';
 
const Img = (props) => (
    <ImageLoading>
        {(ref, status) => (
            <React.Fragment>
                {status === 'error' || !props.src
                    ? <Fallback style={{ backgroundColor: '#ffc107'}} />
                    : <React.Fragment>
                        <img ref={ref} {...props} />
                        <LoadingPlaceholder
                            style={{ 
                                transition: 'opacity 0.5s', 
                                opacity: status === 'loading' ? 1 : 0, 
                                backgroundColor: 'gray' 
                            }}
                            animate={status === 'loading'}
                        />
                    </React.Fragment>
                }
            </React.Fragment>
        )}
    </ImageLoading>
);
 
export default Img;