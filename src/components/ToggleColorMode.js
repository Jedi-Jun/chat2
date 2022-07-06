import { useColorMode } from '@chakra-ui/color-mode';
import { Button } from '@chakra-ui/button';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const ToggleColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  // console.log(colorMode);

  return (
    <Button onClick={toggleColorMode} pos='absolute' top='0' right='0' m='1rem'>
      {colorMode === 'dark' ? (
        <SunIcon color='orange.300' />
      ) : (
        <MoonIcon color='blue.800' />
      )}
    </Button>
  );
};

export default ToggleColorMode;
