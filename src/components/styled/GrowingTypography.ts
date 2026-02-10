import { styled, Typography } from '@mui/material';
import type { TypographyProps } from '@mui/material';
import type { CSSProperties } from 'react';

type GrowingTypographyProps = {
  grow?: boolean,
  growTo?: CSSProperties['fontSize'],
} & TypographyProps;

const GrowingTypography = styled(
  Typography,
  { shouldForwardProp: p => !['grow', 'growTo'].includes(p.toString()) },
)<GrowingTypographyProps>(({ theme, grow, growTo = '1.2rem' }) => ([
  !!grow && { fontSize: growTo },
  { transition: theme.transitions.create('font-size') },
]));

export default GrowingTypography;
