type StatsSideBarTotalProps = {
  bandsSeenLive: number;
  allConcerts: number;
};

function StatsSideBarTotal({
  bandsSeenLive,
  allConcerts
}: StatsSideBarTotalProps) {
  return (
    <>
      <div>
        <p className="font-semibold">Bands seen live</p>
        <p>{bandsSeenLive}</p>
      </div>
      <div>
        <p className="font-semibold">Total concerts</p>
        <p>{allConcerts}</p>
      </div>
    </>
  );
}

export default StatsSideBarTotal;
