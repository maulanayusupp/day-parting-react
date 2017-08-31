import {
	observable,
	computed,
	action
} from 'mobx'

class DayPartingStore {
	@observable dates = [
	  {
	    id: 'monday',
	    name: 'Monday',
	    dates: [
			{id:1, name: '12', type: 'AM'},
			{id:2, name: '01', type: 'AM'},
			{id:3, name: '02', type: 'AM'},
			{id:4, name: '03', type: 'AM'},
			{id:5, name: '04', type: 'AM'},
			{id:6, name: '05', type: 'AM'},
			{id:7, name: '06', type: 'AM'},
			{id:8, name: '07', type: 'AM'},
			{id:9, name: '08', type: 'AM'},
			{id:10, name: '09', type: 'AM'},
			{id:11, name: '10', type: 'AM'},
			{id:12, name: '11', type: 'AM'},
			{id:13, name: '12', type: 'PM'},
			{id:14, name: '01', type: 'PM'},
			{id:15, name: '02', type: 'PM'},
			{id:16, name: '03', type: 'PM'},
			{id:17, name: '04', type: 'PM'},
			{id:18, name: '05', type: 'PM'},
			{id:19, name: '06', type: 'PM'},
			{id:20, name: '07', type: 'PM'},
			{id:21, name: '08', type: 'PM'},
			{id:22, name: '09', type: 'PM'},
			{id:23, name: '10', type: 'PM'},
			{id:24, name: '11', type: 'PM'}
	    ]
	  },
	  {
	    id: 'tuesday',
	    name: 'Tuesday',
	    dates: [
	      {id:1, name: '12', type: 'AM'},
	      {id:2, name: '01', type: 'AM'},
	      {id:3, name: '02', type: 'AM'},
	      {id:4, name: '03', type: 'AM'},
	      {id:5, name: '04', type: 'AM'},
	      {id:6, name: '05', type: 'AM'},
	      {id:7, name: '06', type: 'AM'},
	      {id:8, name: '07', type: 'AM'},
	      {id:9, name: '08', type: 'AM'},
	      {id:10, name: '09', type: 'AM'},
	      {id:11, name: '10', type: 'AM'},
	      {id:12, name: '11', type: 'AM'},
	      {id:13, name: '12', type: 'PM'},
	      {id:14, name: '01', type: 'PM'},
	      {id:15, name: '02', type: 'PM'},
	      {id:16, name: '03', type: 'PM'},
	      {id:17, name: '04', type: 'PM'},
	      {id:18, name: '05', type: 'PM'},
	      {id:19, name: '06', type: 'PM'},
	      {id:20, name: '07', type: 'PM'},
	      {id:21, name: '08', type: 'PM'},
	      {id:22, name: '09', type: 'PM'},
	      {id:23, name: '10', type: 'PM'},
	      {id:24, name: '11', type: 'PM'},
	    ]
	  },
	  {
	    id: 'wednesday',
	    name: 'Wednesday',
	    dates: [
	      {id:1, name: '12', type: 'AM'},
	      {id:2, name: '01', type: 'AM'},
	      {id:3, name: '02', type: 'AM'},
	      {id:4, name: '03', type: 'AM'},
	      {id:5, name: '04', type: 'AM'},
	      {id:6, name: '05', type: 'AM'},
	      {id:7, name: '06', type: 'AM'},
	      {id:8, name: '07', type: 'AM'},
	      {id:9, name: '08', type: 'AM'},
	      {id:10, name: '09', type: 'AM'},
	      {id:11, name: '10', type: 'AM'},
	      {id:12, name: '11', type: 'AM'},
	      {id:13, name: '12', type: 'PM'},
	      {id:14, name: '01', type: 'PM'},
	      {id:15, name: '02', type: 'PM'},
	      {id:16, name: '03', type: 'PM'},
	      {id:17, name: '04', type: 'PM'},
	      {id:18, name: '05', type: 'PM'},
	      {id:19, name: '06', type: 'PM'},
	      {id:20, name: '07', type: 'PM'},
	      {id:21, name: '08', type: 'PM'},
	      {id:22, name: '09', type: 'PM'},
	      {id:23, name: '10', type: 'PM'},
	      {id:24, name: '11', type: 'PM'},
	    ]
	  },
	  {
	    id: 'thursday',
	    name: 'Thursday',
	    dates: [
	      {id:1, name: '12', type: 'AM'},
	      {id:2, name: '01', type: 'AM'},
	      {id:3, name: '02', type: 'AM'},
	      {id:4, name: '03', type: 'AM'},
	      {id:5, name: '04', type: 'AM'},
	      {id:6, name: '05', type: 'AM'},
	      {id:7, name: '06', type: 'AM'},
	      {id:8, name: '07', type: 'AM'},
	      {id:9, name: '08', type: 'AM'},
	      {id:10, name: '09', type: 'AM'},
	      {id:11, name: '10', type: 'AM'},
	      {id:12, name: '11', type: 'AM'},
	      {id:13, name: '12', type: 'PM'},
	      {id:14, name: '01', type: 'PM'},
	      {id:15, name: '02', type: 'PM'},
	      {id:16, name: '03', type: 'PM'},
	      {id:17, name: '04', type: 'PM'},
	      {id:18, name: '05', type: 'PM'},
	      {id:19, name: '06', type: 'PM'},
	      {id:20, name: '07', type: 'PM'},
	      {id:21, name: '08', type: 'PM'},
	      {id:22, name: '09', type: 'PM'},
	      {id:23, name: '10', type: 'PM'},
	      {id:24, name: '11', type: 'PM'},
	    ]
	  },
	  {
	    id: 'friday',
	    name: 'Friday',
	    dates: [
	      {id:1, name: '12', type: 'AM'},
	      {id:2, name: '01', type: 'AM'},
	      {id:3, name: '02', type: 'AM'},
	      {id:4, name: '03', type: 'AM'},
	      {id:5, name: '04', type: 'AM'},
	      {id:6, name: '05', type: 'AM'},
	      {id:7, name: '06', type: 'AM'},
	      {id:8, name: '07', type: 'AM'},
	      {id:9, name: '08', type: 'AM'},
	      {id:10, name: '09', type: 'AM'},
	      {id:11, name: '10', type: 'AM'},
	      {id:12, name: '11', type: 'AM'},
	      {id:13, name: '12', type: 'PM'},
	      {id:14, name: '01', type: 'PM'},
	      {id:15, name: '02', type: 'PM'},
	      {id:16, name: '03', type: 'PM'},
	      {id:17, name: '04', type: 'PM'},
	      {id:18, name: '05', type: 'PM'},
	      {id:19, name: '06', type: 'PM'},
	      {id:20, name: '07', type: 'PM'},
	      {id:21, name: '08', type: 'PM'},
	      {id:22, name: '09', type: 'PM'},
	      {id:23, name: '10', type: 'PM'},
	      {id:24, name: '11', type: 'PM'},
	    ]
	  },
	  {
	    id: 'saturday',
	    name: 'Saturday',
	    dates: [
	      {id:1, name: '12', type: 'AM'},
	      {id:2, name: '01', type: 'AM'},
	      {id:3, name: '02', type: 'AM'},
	      {id:4, name: '03', type: 'AM'},
	      {id:5, name: '04', type: 'AM'},
	      {id:6, name: '05', type: 'AM'},
	      {id:7, name: '06', type: 'AM'},
	      {id:8, name: '07', type: 'AM'},
	      {id:9, name: '08', type: 'AM'},
	      {id:10, name: '09', type: 'AM'},
	      {id:11, name: '10', type: 'AM'},
	      {id:12, name: '11', type: 'AM'},
	      {id:13, name: '12', type: 'PM'},
	      {id:14, name: '01', type: 'PM'},
	      {id:15, name: '02', type: 'PM'},
	      {id:16, name: '03', type: 'PM'},
	      {id:17, name: '04', type: 'PM'},
	      {id:18, name: '05', type: 'PM'},
	      {id:19, name: '06', type: 'PM'},
	      {id:20, name: '07', type: 'PM'},
	      {id:21, name: '08', type: 'PM'},
	      {id:22, name: '09', type: 'PM'},
	      {id:23, name: '10', type: 'PM'},
	      {id:24, name: '11', type: 'PM'},
	    ]
	  },
	  {
	    id: 'sunday',
	    name: 'Sunday',
	    dates: [
	      {id:1, name: '12', type: 'AM'},
	      {id:2, name: '01', type: 'AM'},
	      {id:3, name: '02', type: 'AM'},
	      {id:4, name: '03', type: 'AM'},
	      {id:5, name: '04', type: 'AM'},
	      {id:6, name: '05', type: 'AM'},
	      {id:7, name: '06', type: 'AM'},
	      {id:8, name: '07', type: 'AM'},
	      {id:9, name: '08', type: 'AM'},
	      {id:10, name: '09', type: 'AM'},
	      {id:11, name: '10', type: 'AM'},
	      {id:12, name: '11', type: 'AM'},
	      {id:13, name: '12', type: 'PM'},
	      {id:14, name: '01', type: 'PM'},
	      {id:15, name: '02', type: 'PM'},
	      {id:16, name: '03', type: 'PM'},
	      {id:17, name: '04', type: 'PM'},
	      {id:18, name: '05', type: 'PM'},
	      {id:19, name: '06', type: 'PM'},
	      {id:20, name: '07', type: 'PM'},
	      {id:21, name: '08', type: 'PM'},
	      {id:22, name: '09', type: 'PM'},
	      {id:23, name: '10', type: 'PM'},
	      {id:24, name: '11', type: 'PM'},
	    ]
	  },
	];

	@observable selectedItems = [];
	@observable selectingItems = [];

	@action onSelectedItems (selectedItems) {
		this.selectedItems = selectedItems;
	}

	@action onSelectingItems (selectingItems) {
		this.selectingItems = selectingItems;
	}
}

const dayPartingStore = new DayPartingStore()

window.store = dayPartingStore

export default dayPartingStore