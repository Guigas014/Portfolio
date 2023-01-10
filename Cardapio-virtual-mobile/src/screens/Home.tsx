import { Text, Center } from 'native-base';


export function Home() {
  return (
    <Center flex={1} bgColor="blue.900" alignItems="center" justifyContent="center">
      <Text color="white" fontFamily="Roboto_700Bold" fontSize="lg">
        I'm hungry!!
      </Text>
    </Center>
  );
}

