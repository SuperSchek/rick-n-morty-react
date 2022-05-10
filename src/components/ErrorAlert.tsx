import { Alert, AlertDescription, AlertTitle, AlertIcon } from '@chakra-ui/react';

interface Props {
  title: string;
  description: string;
}

function ErrorAlert({ title, description }: Props) {
  return (
    <Alert status="error">
      <AlertIcon />
      {title && <AlertTitle>{title}</AlertTitle>}
      {description && <AlertDescription>{description}</AlertDescription>}
    </Alert>
  )
}

export default ErrorAlert;
