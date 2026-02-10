import { SvgIcon } from '@mui/material';
import type { SvgIconProps } from '@mui/material';
import { GB as EN, PT } from 'country-flag-icons/react/3x2';
import type { FlagComponent as FlagComponentType } from 'country-flag-icons/react/3x2';
import type { AvailableLanguage } from '../../i18n';

const flagMap: Record<AvailableLanguage, FlagComponentType> = {
  en: EN,
  pt: PT,
};

export type FlagIconProps = { lngCode: string } & SvgIconProps;

function FlagIcon({ lngCode, sx, ...props }: FlagIconProps) {
  const FlagComponent = flagMap[lngCode as AvailableLanguage];
  return (
    <SvgIcon sx={{ color: 'black', ...sx }} {...props}>
      <FlagComponent />
    </SvgIcon>
  );
}

export default FlagIcon;
