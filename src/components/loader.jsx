import { Watch } from 'react-loader-spinner'

function loader() {
    return (
            <Watch
                height="80"
                width="80"
                radius="48"
                color="black"
                ariaLabel="watch-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />
        )
    };

export default loader;