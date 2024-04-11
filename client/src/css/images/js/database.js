import { openDB } from 'idb';

const initdb = async () =>
	openDB('text-editor', 1, {
		upgrade(db) {
			if (db.objectStoreNames.contains('text-editor')) {
				console.log('this database already exists');
				return;
			}
			db.createObjectStore('text-editor', {
				keyPath: 'id',
				autoIncrement: true,
			});
			console.log('database created');
		},
	});
