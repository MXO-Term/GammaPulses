import { Icon } from '@rocket.chat/fuselage';
import { useTranslation } from '@rocket.chat/ui-contexts';
import React from 'react';

import GenericModal from '../../../../../components/GenericModal';

export const StepTwo = ({ onConfirm, onCancel, onClose }) => {
	const t = useTranslation();

	return (
		<GenericModal
			icon={<Icon name='modal-warning' size={24} color='warning' />}
			variant='danger'
			title={t('Confirmation')}
			onConfirm={onConfirm}
			onCancel={onCancel || onClose}
			onClose={onClose}
			confirmText={t('Leave')}
			cancelText={onCancel ? t('Back') : t('Cancel')}
		>
			{t('Teams_leaving_team')}
		</GenericModal>
	);
};

export default StepTwo;
