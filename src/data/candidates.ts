import { Filter, RoomFloor, RoomCount, ContractType } from '../filter';

/**
 * 월세 한도 (단위 만원)
 */
const rentBudget = 1000;

/**
 * 보증금 한도 (단위 만원)
 */
const depositBudget = 10000;

const commonFilter: Omit<Filter, 'bounds' | 'id'> = {
    priceRange: {
        rent: { max: rentBudget * 10000 },
        deposit: { max: depositBudget * 10000 },
        shouldIncludeMaintenance: true,
    },
    buildingTypes: [],
    roomFloors: [RoomFloor.lower, RoomFloor.higher],
    roomCounts: [RoomCount.twoRooms, RoomCount.threeAndMoreRooms],
    contractTypes: [ContractType.rent],
    shouldIncludeHalfUndergrounds: false,
    shouldIncludeLofts: true,
    shouldIncludeRooftops: true,
};

// https://api.peterpanz.com/houses/area?filter=latitude:37.4802682~37.4895139%7C%7Clongitude:127.0092198~127.0323082%7C%7CcheckDeposit:120000000~200000000&zoomLevel=16&center=%7B%22y%22:37.4848912,%22_lat%22:37.4848912,%22x%22:127.020764,%22_lng%22:127.020764%7D&dong=%EC%84%9C%EC%B4%881%EB%8F%99&gungu=%EC%84%9C%EC%B4%88%EA%B5%AC&pageSize=90&pageIndex=2

const candidates: Filter[] = [
    {
        id: '서초동',
        ...commonFilter,
        priceRange: {
            rent: { max: 30000 },
            deposit: { max: depositBudget * 10000 },
            shouldIncludeMaintenance: true,
        },
        bounds: {
            max: { lat: 37.4802682, lng: 127.0092198 },
            min: { lat: 37.4895139, lng: 127.0323082 },
        },
    },
    {
        id: '뚝섬 서울숲',
        ...commonFilter,
        bounds: {
            max: { lat: 37.5558485, lng: 127.060802 },
            min: { lat: 37.5317832, lng: 127.0328288 },
        },
    },
    {
        id: '회사 근처',
        ...commonFilter,
        bounds: {
            max: { lat: 37.508058, lng: 127.0463052 },
            min: { lat: 37.4893626, lng: 127.0275955 },
        },
    },
];

export default candidates;
