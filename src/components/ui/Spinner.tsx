import { Oval } from 'react-loader-spinner';

const Spinner = ({ height = 100, width = 100 }) => {
  return (
    <Oval
      height={height}
      width={width}
      color='#4fa94d'
      wrapperStyle={{}}
      wrapperClass=''
      visible={true}
      ariaLabel='oval-loading'
      secondaryColor='#4fa94d'
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  );
};

export default Spinner;
