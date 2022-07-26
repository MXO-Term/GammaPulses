import { Meteor } from 'meteor/meteor';
import { Match } from 'meteor/check';

import { Rooms, Messages } from '../../../models/server';
import { callbacks } from '../../../../lib/callbacks';

export const saveRoomTopic = function (rid, roomTopic, user, sendMessage = true) {
	if (!Match.test(rid, String)) {
		throw new Meteor.Error('invalid-room', 'Invalid room', {
			function: 'RocketChat.saveRoomTopic',
		});
	}

	const update = Rooms.setTopicById(rid, roomTopic);
	if (update && sendMessage) {
		Messages.createRoomSettingsChangedWithTypeRoomIdMessageAndUser('room_changed_topic', rid, roomTopic, user);
	}
	callbacks.run('afterRoomTopicChange', { rid, topic: roomTopic });
	return update;
};
