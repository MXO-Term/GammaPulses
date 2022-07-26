import { Box } from '@rocket.chat/fuselage';
import React, { ComponentProps, FC } from 'react';

const AttachmentContent: FC<ComponentProps<typeof Box>> = ({ ...props }) => <Box rcx-attachment__content width='full' mb='x4' {...props} />;

export default AttachmentContent;
