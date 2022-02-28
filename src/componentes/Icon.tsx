import { FC } from 'react';

interface IconProps {
  name: string;
}

export const Icon: FC<IconProps> = ({ name }) => <>
  <span> { name } </span>
</>