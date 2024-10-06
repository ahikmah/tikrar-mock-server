import { uuidv4 } from 'src/utils/uuidv4';
import { fSub } from 'src/utils/set-date';

import { _mock } from './_mock';
import { _files } from './_files';

// ----------------------------------------------------------------------

export const _contacts = () =>
  [...Array(20)].map((_, index) => ({
    id: _mock.id(index),
    role: _mock.role(index),
    email: _mock.email(index),
    name: _mock.fullName(index),
    lastActivity: _mock.time(index),
    address: _mock.fullAddress(index),
    avatarUrl: _mock.image.avatar(index),
    phoneNumber: _mock.phoneNumber(index),
    status: (index % 2 && 'online') || (index % 3 && 'offline') || (index % 4 && 'alway') || 'busy',
  }));

export const _conversations = () => {
  const myContact = {
    id: '8864c717-587d-472a-929a-8e5f298024da-0',
    role: 'admin',
    status: 'online',
    name: 'Jaydon Frankie',
    email: 'demo@tikrar.id',
    phoneNumber: '+40 777666555',
    address: '90210 Broadway Blvd',
    avatarUrl: _mock.image.avatar(24),
    lastActivity: fSub({ minutes: 1 }),
  };

  const files = _files();

  const otherContacts = _contacts();

  return [
    {
      id: otherContacts[1].id,
      participants: [myContact, otherContacts[1]],
      type: 'ONE_TO_ONE',
      unreadCount: 0,
      messages: [
        {
          id: uuidv4(),
          senderId: otherContacts[1].id,
          body: _mock.sentence(1),
          contentType: 'text',
          attachments: files.slice(0, 1),
          createdAt: fSub({ hours: 5 }),
        },
        {
          id: uuidv4(),
          senderId: myContact.id,
          body: _mock.sentence(2),
          contentType: 'text',
          attachments: files.slice(1, 2),
          createdAt: fSub({ hours: 4 }),
        },
        {
          id: uuidv4(),
          senderId: otherContacts[1].id,
          body: _mock.sentence(3),
          contentType: 'text',
          attachments: files.slice(2, 3),
          createdAt: fSub({ hours: 3 }),
        },
        {
          id: uuidv4(),
          senderId: myContact.id,
          body: _mock.sentence(4),
          contentType: 'text',
          attachments: files.slice(3, 6),
          createdAt: fSub({ hours: 2 }),
        },
        {
          id: uuidv4(),
          senderId: otherContacts[1].id,
          body: _mock.sentence(5),
          contentType: 'text',
          attachments: files.slice(6, 10),
          createdAt: fSub({ hours: 1 }),
        },
        {
          id: uuidv4(),
          senderId: otherContacts[1].id,
          attachments: [],
          contentType: 'image',
          body: _mock.image.cover(4),
          createdAt: fSub({ minutes: 15 }),
        },
        {
          id: uuidv4(),
          senderId: myContact.id,
          contentType: 'text',
          attachments: [],
          body: _mock.sentence(6),
          createdAt: fSub({ minutes: 1 }),
        },
        {
          id: uuidv4(),
          senderId: myContact.id,
          body: _mock.sentence(7),
          contentType: 'text',
          attachments: [],
          createdAt: fSub({ minutes: 0 }),
        },
      ],
    },
    {
      id: otherContacts[2].id,
      participants: [myContact, otherContacts[2]],
      type: 'ONE_TO_ONE',
      unreadCount: 0,
      messages: [
        {
          id: uuidv4(),
          senderId: otherContacts[2].id,
          body: _mock.sentence(2),
          contentType: 'text',
          attachments: [],
          createdAt: fSub({ hours: 6 }),
        },
        {
          id: uuidv4(),
          senderId: myContact.id,
          body: _mock.sentence(3),
          contentType: 'text',
          attachments: [],
          createdAt: fSub({ hours: 5 }),
        },
        {
          id: uuidv4(),
          senderId: otherContacts[2].id,
          body: _mock.sentence(4),
          contentType: 'text',
          attachments: [],
          createdAt: fSub({ hours: 4 }),
        },
        {
          id: uuidv4(),
          senderId: myContact.id,
          body: _mock.sentence(5),
          contentType: 'text',
          attachments: [],
          createdAt: fSub({ hours: 7 }),
        },
        {
          id: uuidv4(),
          senderId: otherContacts[2].id,
          body: _mock.sentence(6),
          contentType: 'text',
          attachments: [],
          createdAt: fSub({ hours: 3 }),
        },
        {
          id: uuidv4(),
          senderId: otherContacts[2].id,
          body: _mock.image.cover(7),
          attachments: [],
          contentType: 'image',
          createdAt: fSub({ hours: 2 }),
        },
        {
          id: uuidv4(),
          senderId: myContact.id,
          body: _mock.sentence(8),
          contentType: 'text',
          attachments: [],
          createdAt: fSub({ hours: 1 }),
        },
      ],
    },
    {
      id: otherContacts[3].id,
      participants: [myContact, otherContacts[3]],
      type: 'ONE_TO_ONE',
      unreadCount: 0,
      messages: [
        {
          id: uuidv4(),
          senderId: otherContacts[3].id,
          body: _mock.sentence(3),
          contentType: 'text',
          attachments: files.slice(0, 1),
          createdAt: fSub({ hours: 8 }),
        },
        {
          id: uuidv4(),
          senderId: myContact.id,
          body: _mock.sentence(4),
          contentType: 'text',
          attachments: files.slice(1, 2),
          createdAt: fSub({ hours: 7 }),
        },
        {
          id: uuidv4(),
          senderId: otherContacts[3].id,
          body: _mock.sentence(5),
          contentType: 'text',
          attachments: [],
          createdAt: fSub({ hours: 6 }),
        },
        {
          id: uuidv4(),
          senderId: myContact.id,
          body: _mock.sentence(6),
          contentType: 'text',
          attachments: files.slice(2, 4),
          createdAt: fSub({ hours: 5 }),
        },
        {
          id: uuidv4(),
          senderId: otherContacts[3].id,
          body: _mock.sentence(7),
          contentType: 'text',
          attachments: [],
          createdAt: fSub({ hours: 4 }),
        },
        {
          id: uuidv4(),
          senderId: otherContacts[3].id,
          body: _mock.image.cover(8),
          contentType: 'image',
          attachments: [],
          createdAt: fSub({ hours: 3 }),
        },
        {
          id: uuidv4(),
          senderId: otherContacts[3].id,
          body: _mock.image.cover(9),
          contentType: 'image',
          attachments: [],
          createdAt: fSub({ hours: 2 }),
        },
      ],
    },
    {
      id: otherContacts[4].id,
      participants: [myContact, otherContacts[4]],
      type: 'ONE_TO_ONE',
      unreadCount: 8,
      messages: [
        {
          id: uuidv4(),
          senderId: otherContacts[4].id,
          body: _mock.sentence(4),
          contentType: 'text',
          attachments: files.slice(2, 4),
          createdAt: fSub({ hours: 4 }),
        },
        {
          id: uuidv4(),
          senderId: myContact.id,
          body: _mock.sentence(5),
          contentType: 'text',
          attachments: files.slice(4, 6),
          createdAt: fSub({ hours: 3 }),
        },
        {
          id: uuidv4(),
          senderId: otherContacts[4].id,
          body: _mock.sentence(6),
          contentType: 'text',
          attachments: [],
          createdAt: fSub({ hours: 2 }),
        },
        {
          id: uuidv4(),
          senderId: myContact.id,
          body: _mock.sentence(7),
          contentType: 'text',
          attachments: [],
          createdAt: fSub({ hours: 1 }),
        },
        {
          id: uuidv4(),
          senderId: myContact.id,
          body: _mock.sentence(8),
          contentType: 'text',
          attachments: files.slice(6, 10),
          createdAt: fSub({ minutes: 45 }),
        },
        {
          id: uuidv4(),
          senderId: otherContacts[4].id,
          body: _mock.sentence(9),
          contentType: 'text',
          attachments: [],
          createdAt: fSub({ minutes: 5 }),
        },
      ],
    },
    {
      id: otherContacts[5].id,
      participants: [myContact, otherContacts[5]],
      type: 'ONE_TO_ONE',
      unreadCount: 0,
      messages: [
        {
          id: uuidv4(),
          senderId: myContact.id,
          body: _mock.sentence(5),
          contentType: 'text',
          attachments: [],
          createdAt: fSub({ minutes: 5 }),
        },
        {
          id: uuidv4(),
          senderId: otherContacts[5].id,
          body: _mock.sentence(6),
          contentType: 'text',
          attachments: [],
          createdAt: fSub({ seconds: 30 }),
        },
      ],
    },
    {
      id: otherContacts[6].id,
      participants: [myContact, otherContacts[6]],
      type: 'ONE_TO_ONE',
      unreadCount: 0,
      messages: [
        {
          id: uuidv4(),
          senderId: myContact.id,
          body: _mock.sentence(6),
          contentType: 'text',
          attachments: [],
          createdAt: fSub({ hours: 2 }),
        },
        {
          id: uuidv4(),
          senderId: otherContacts[6].id,
          body: _mock.sentence(7),
          contentType: 'text',
          attachments: [],
          createdAt: fSub({ hours: 1 }),
        },
      ],
    },
    {
      id: `${_mock.id(1)}gr`,
      participants: [myContact, ...otherContacts.slice(6, 11)],
      type: 'GROUP',
      unreadCount: 2,
      messages: [
        {
          id: uuidv4(),
          senderId: myContact.id,
          body: _mock.sentence(6),
          contentType: 'text',
          attachments: [],
          createdAt: fSub({ hours: 5 }),
        },
        {
          id: uuidv4(),
          senderId: otherContacts[9].id,
          body: _mock.sentence(7),
          contentType: 'text',
          attachments: [],
          createdAt: fSub({ hours: 4 }),
        },
        {
          id: uuidv4(),
          senderId: otherContacts[10].id,
          body: _mock.sentence(8),
          contentType: 'text',
          attachments: [],
          createdAt: fSub({ hours: 3 }),
        },
        {
          id: uuidv4(),
          senderId: otherContacts[8].id,
          body: _mock.sentence(9),
          contentType: 'text',
          attachments: [],
          createdAt: fSub({ hours: 2 }),
        },
        {
          id: uuidv4(),
          senderId: myContact.id,
          attachments: [],
          body: _mock.sentence(10),
          contentType: 'text',
          createdAt: fSub({ hours: 1 }),
        },
        {
          id: uuidv4(),
          senderId: otherContacts[6].id,
          body: _mock.sentence(11),
          contentType: 'text',
          attachments: [],
          createdAt: fSub({ minutes: 5 }),
        },
        {
          id: uuidv4(),
          senderId: otherContacts[7].id,
          body: _mock.sentence(12),
          contentType: 'text',
          attachments: [],
          createdAt: fSub({ seconds: 30 }),
        },
      ],
    },
    {
      id: otherContacts[7].id,
      participants: [myContact, otherContacts[7]],
      type: 'ONE_TO_ONE',
      unreadCount: 0,
      messages: [
        {
          id: uuidv4(),
          senderId: myContact.id,
          body: _mock.sentence(7),
          contentType: 'text',
          attachments: [],
          createdAt: fSub({ days: 4 }),
        },
        {
          id: uuidv4(),
          senderId: otherContacts[7].id,
          body: _mock.sentence(8),
          contentType: 'text',
          attachments: [],
          createdAt: fSub({ days: 3 }),
        },
      ],
    },
    {
      id: otherContacts[8].id,
      participants: [myContact, otherContacts[8]],
      type: 'ONE_TO_ONE',
      unreadCount: 0,
      messages: [
        {
          id: uuidv4(),
          senderId: myContact.id,
          body: _mock.sentence(8),
          contentType: 'text',
          attachments: [],
          createdAt: fSub({ hours: 9 }),
        },
        {
          id: uuidv4(),
          senderId: otherContacts[8].id,
          body: _mock.sentence(9),
          contentType: 'text',
          attachments: [],
          createdAt: fSub({ hours: 8 }),
        },
      ],
    },
    {
      id: otherContacts[9].id,
      participants: [myContact, otherContacts[9]],
      type: 'ONE_TO_ONE',
      unreadCount: 0,
      messages: [
        {
          id: uuidv4(),
          senderId: myContact.id,
          body: _mock.sentence(9),
          contentType: 'text',
          attachments: [],
          createdAt: fSub({ hours: 5 }),
        },
        {
          id: uuidv4(),
          senderId: otherContacts[9].id,
          body: _mock.sentence(10),
          contentType: 'text',
          attachments: [],
          createdAt: fSub({ hours: 3 }),
        },
      ],
    },
    {
      id: `${_mock.id(2)}gr`,
      participants: [myContact, ...otherContacts.slice(1, 5)],
      type: 'GROUP',
      unreadCount: 0,
      messages: [
        {
          id: uuidv4(),
          senderId: myContact.id,
          body: _mock.sentence(1),
          contentType: 'text',
          attachments: files.slice(0, 5),
          createdAt: fSub({ hours: 4 }),
        },
        {
          id: uuidv4(),
          senderId: otherContacts[1].id,
          body: _mock.sentence(2),
          contentType: 'text',
          attachments: files.slice(5, 6),
          createdAt: fSub({ hours: 3 }),
        },
        {
          id: uuidv4(),
          senderId: otherContacts[2].id,
          body: _mock.sentence(3),
          contentType: 'text',
          attachments: files.slice(6, 7),
          createdAt: fSub({ hours: 2 }),
        },
        {
          id: uuidv4(),
          senderId: otherContacts[4].id,
          body: _mock.sentence(4),
          contentType: 'text',
          attachments: files.slice(7, 8),
          createdAt: fSub({ hours: 1 }),
        },
        {
          id: uuidv4(),
          senderId: myContact.id,
          body: _mock.sentence(5),
          contentType: 'text',
          attachments: files.slice(8, 9),
          createdAt: fSub({ minutes: 30 }),
        },
        {
          id: uuidv4(),
          senderId: otherContacts[3].id,
          body: _mock.sentence(6),
          contentType: 'text',
          attachments: files.slice(9, 10),
          createdAt: fSub({ minutes: 10 }),
        },
      ],
    },
    {
      id: otherContacts[10].id,
      participants: [myContact, otherContacts[10]],
      type: 'ONE_TO_ONE',
      unreadCount: 0,
      messages: [
        {
          id: uuidv4(),
          senderId: myContact.id,
          body: _mock.sentence(10),
          contentType: 'text',
          attachments: [],
          createdAt: fSub({ days: 11 }),
        },
        {
          id: uuidv4(),
          senderId: otherContacts[10].id,
          body: _mock.sentence(11),
          contentType: 'text',
          attachments: [],
          createdAt: fSub({ days: 10 }),
        },
      ],
    },
  ];
};
